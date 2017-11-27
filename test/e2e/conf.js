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
    try {
      fs.statSync(e2ePath);
    } catch (e1) {
      fs.mkdirSync(e2ePath);
    }
  } catch (e2) {
    fs.mkdirSync(testOutputPath);
    fs.mkdirSync(e2ePath);
  }

  try {
    fs.statSync(screenshotPath);
    rmdir(screenshotPath);
  } catch (e) { /* do nothing */ }

  try {
    fs.statSync(`${e2ePath}/report.html.json`);
    fs.unlinkSync(`${e2ePath}/report.html.json`);
  } catch (e) { /* do nothing */ }
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
    browserName: 'chrome'
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
  onPrepare: () => {
    browser.waitForAngularEnabled(false);
    createOrCleanTestOutputDir();
  },
  onComplete: () => {
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
