const domain = 'http://localhost:3000';
const specPath = './test/layout/specs';

const devices = { // eslint-disable-line no-unused-vars
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

function getDriver(url, device) { // eslint-disable-line no-unused-vars
  const driver = createDriver(domain + url, device.size, device.browser);
  return driver;
}

function check(driver, spec, tags) { // eslint-disable-line no-unused-vars
  checkLayout(driver, specPath + spec, tags);
  driver.close();
}
