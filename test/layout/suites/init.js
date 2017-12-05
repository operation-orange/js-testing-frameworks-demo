/*
  eslint-disable
  prefer-arrow-callback,
  func-names,
  prefer-template,
  no-var,
  no-template-curly-in-string
*/
/* global FirefoxDriver, FirefoxProfile, GalenUtils, SeleniumBrowser, ChromeOptions, ChromeDriver */
/* eslint-disable no-undef */
importClass(org.openqa.selenium.firefox.FirefoxDriver);
importClass(org.openqa.selenium.firefox.FirefoxProfile);
importClass(com.galenframework.utils.GalenUtils);
importClass(com.galenframework.browser.SeleniumBrowser);
importClass(org.openqa.selenium.chrome.ChromeOptions);
importClass(org.openqa.selenium.chrome.ChromeDriver);
/* eslint-enable no-undef */

const domain = 'http://localhost:3000';

const devices = {
  desktopChrome: {
    deviceName: 'desktop chrome',
    size: '1100x800',
    tags: ['desktop'],
    browser: 'chrome'
  },
  tabletChrome: {
    deviceName: 'tablet chrome',
    size: '601x800',
    tags: ['tablet'],
    browser: 'chrome'
  },
  mobileChrome: {
    deviceName: 'mobile chrome',
    size: '450x800',
    tags: ['mobile'],
    browser: 'chrome'
  }
};

function openDriver(size, browser) {
  var driver;
  var profile;
  var driverGalen;
  var options;
  const windowSize = GalenUtils.readSize(size);

  if (browser === 'chrome') {
    options = new ChromeOptions();
    // Comment out the following options for standard chrome
    // options.addArguments('--headless');
    // options.addArguments('--disable-gpu');
    driver = new ChromeDriver(options);
    driverGalen = new SeleniumBrowser(driver);
    driverGalen.changeWindowSize(windowSize);
  } else if (browser === 'firefox') {
    // Only works for sites on localhost otherwise the proxy will break things
    // Current version of selenium (2.53.1) requires firefox 47.0.1
    profile = new FirefoxProfile();
    driver = new FirefoxDriver(profile);
    driverGalen = new SeleniumBrowser(driver);
    driverGalen.changeWindowSize(windowSize);
  }

  session.put('driver', driver);

  return driver;
}

function runTest(testNamePrefix, url, callback) {
  test(testNamePrefix + ' on device: ${deviceName} ', function (device) {
    const driver = openDriver(device.size, device.browser);
    driver.get(domain + url);

    if (callback) {
      callback.call(this, driver, device);
    }
  });
}
