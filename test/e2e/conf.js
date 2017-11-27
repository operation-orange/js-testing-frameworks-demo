require('babel-core/register');
const reporter = require('cucumber-html-reporter');
const fs = require('fs');
const rmdir = require('rmdir');

const testOutputPath = `${process.cwd()}/testOutput`;
const e2ePath = `${testOutputPath}/e2e`;
const screenshotPath = `${e2ePath}/screenshots`;

function createOrCleanTestOutputDir() {
  try {
    fs.statSync(testOutputPath);
  } catch (e2) {
    fs.mkdirSync(testOutputPath);
  }

  try {
    fs.statSync(e2ePath);
    rmdir(e2ePath, () => fs.mkdirSync(e2ePath));
  } catch (e) {
    fs.mkdirSync(e2ePath);
  }
}

exports.config = { // eslint-disable-line import/prefer-default-export
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  baseUrl: 'http://localhost:3000',
  specs: [
    'features/**/*.feature'
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu', '--window-size=1000,800']
    },
    shardTestFiles: true,
    maxInstances: 5
  },
  cucumberOpts: {
    require: [
      'support/world.js',
      'support/hooks.js',
      'stepDefinitions/*.js'
    ],
    // 'tags': '@current',
    format: `json:${e2ePath}/e2e-report.json`,
    profile: false,
    'no-source': true
  },
  beforeLaunch: () => {
    createOrCleanTestOutputDir();
  },
  onPrepare: () => {
    browser.waitForAngularEnabled(false);
  },
  afterLaunch: () => {
    const options = {
      theme: 'bootstrap',
      jsonDir: e2ePath,
      output: `${e2ePath}/report.html`,
      reportSuiteAsScenarios: true,
      launchReport: false,
      storeScreenshots: true,
      screenshotsDirectory: screenshotPath
    };
    reporter.generate(options);
  }
};
