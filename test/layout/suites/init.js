const domain = 'http://localhost:3000';
const specPath = './test/layout/specs'; // eslint-disable-line no-unused-vars

const devices = { // eslint-disable-line no-unused-vars
  desktopChrome: {
    deviceName: 'desktop chrome',
    size: '1300x800',
    tags: ['desktop'],
    browser: 'chrome'
  },
  mobileChrome: {
    deviceName: 'mobile chrome',
    size: '459x800',
    tags: ['mobile'],
    browser: 'chrome'
  }
};

function testAllDevices(url, specFile, pageCallback) {
  forAll(devices, function () {
    test('Home page test - device: ${deviceName}', function (device) {
      const driver = createDriver(domain + url, device.size, device.browser);
      const page = pageCallback ? pageCallback(driver, device) : null;

      checkLayout({
        driver: driver,
        spec: specFile,
        tags: device.tags,
        objects: page && page.getAllLocators()
      });

      driver.close();
    });
  });
}
