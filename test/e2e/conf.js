require('babel-core/register');
const fs = require('fs');
const rmdir = require('rmdir');

const testOutputPath = `${process.cwd()}/testOutput`;
const e2ePath = `${testOutputPath}/e2e`;
const chromeArgs = process.argv.includes('--headless') ? {
  args: ['--headless', '--disable-gpu', '--window-size=1000,800']
} : {};
const firefoxArgs = process.argv.includes('--headless') ? {
  args: ['--headless']
} : {};

try {
  fs.statSync(testOutputPath);
} catch (e2) {
  fs.mkdirSync(testOutputPath);
}

try {
  fs.statSync(e2ePath);
} catch (e) {
  fs.mkdirSync(e2ePath);
}

exports.config = {
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  baseUrl: 'http://localhost:3000',
  specs: [
    'features/**/*.feature'
  ],
  multiCapabilities: [{
    browserName: 'chrome',
    chromeOptions: chromeArgs,
    shardTestFiles: true,
    maxInstances: 10
  }, {
    browserName: 'firefox',
    'moz:firefoxOptions': firefoxArgs,
    shardTestFiles: true,
    maxInstances: 10
  }],
  cucumberOpts: {
    require: [
      'support/world.js',
      'support/hooks.js',
      'stepDefinitions/*.js'
    ],
    // tags: '@current',
    format: `json:${e2ePath}/e2e-report.json`,
    profile: false,
    'no-source': true
  },
  beforeLaunch: () => {
    try {
      fs.statSync(`${e2ePath}/json-output-folder`);
      rmdir(`${e2ePath}/json-output-folder`);
    } catch (e2) { /* do nothing */ }
  },
  onPrepare: () => {
    browser.waitForAngularEnabled(false);
  },
  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options: {
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true,
      openReportInBrowser: true,
      removeOriginalJsonReportFile: true
    }
  }]
};
