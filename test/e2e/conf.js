require('babel-core/register');
const reporter = require('cucumber-html-reporter');
const fs = require('fs');

const e2eOutput = 'e2e/';
const outputPath = '/testOutput/';

function createTestOutputDir() {
  try {
    fs.statSync(`${process.cwd()}${outputPath}`);
    try {
      fs.statSync(`${process.cwd()}${outputPath}${e2eOutput}`);
    } catch (e1) {
      fs.mkdirSync(`${process.cwd()}${outputPath}${e2eOutput}`);
    }
  } catch (e2) {
    fs.mkdirSync(`${process.cwd()}${outputPath}`);
    fs.mkdirSync(`${process.cwd()}${outputPath}${e2eOutput}`);
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
    browserName: 'chrome'
  },
  cucumberOpts: {
    require: [
      'support/world.js',
      'stepDefinitions/*.js'
    ],
    // 'tags': '@current',
    format: `json:.${outputPath}${e2eOutput}e2e-report.json`,
    profile: false,
    'no-source': true
  },
  onPrepare: () => {
    browser.waitForAngularEnabled(false);
    createTestOutputDir();
  },
  onComplete: () => {
    const options = {
      theme: 'bootstrap',
      jsonFile: `.${outputPath}${e2eOutput}e2e-report.json`,
      output: `.${outputPath}${e2eOutput}report.html`,
      reportSuiteAsScenarios: true,
      launchReport: false
    };
    reporter.generate(options);
  }
};
