require('babel-core/register');
const fs = require('fs');
const rmdir = require('rmdir');

const testOutputPath = `${process.cwd()}/testOutput`;
const e2ePath = `${testOutputPath}/e2e`;

let capabilities = null;

if (process.argv.includes('--headless')) {
  capabilities = {
    multiCapabilities: [{
      browserName: 'chrome',
      chromeOptions: {
        args: ['--headless', '--disable-gpu', '--window-size=1000,800']
      },
      shardTestFiles: true,
      maxInstances: 3
    }, {
      browserName: 'firefox',
      'moz:firefoxOptions': {
        args: ['--headless']
      },
      shardTestFiles: true,
      maxInstances: 3
    }]
  };
} else {
  capabilities = {
    capabilities: {
      browserName: 'chrome'
    }
  };
}

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

let config = {
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  baseUrl: 'http://localhost:3000',
  specs: [
    'features/**/*.feature'
  ],
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
      openReportInBrowser: false,
      removeOriginalJsonReportFile: true
    }
  }]
};

config = Object.assign(config, capabilities);

exports.config = config;
