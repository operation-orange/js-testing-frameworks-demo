load('vars.js');
load('pages/home.js');

forAll(devices, function () {
  test('Home page test - device: ${deviceName}', function (device) {
    const driver = createDriver(domain, device.size, device.browser);
    const homePage = new HomePage(driver).load();

    checkLayout({
      driver: driver,
      spec: specPath + '/header.gspec',
      tags: device.tags,
      objects: homePage.getAllLocators()
    });

    driver.close();
  });
});
