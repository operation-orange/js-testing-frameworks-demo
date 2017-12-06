load('init.js');

forAll(devices, function () {
  test('Home page test - device: ${deviceName}', function (device) {
    const driver = getDriver('/?brand=topshop', device);
    check(driver, '/home.gspec', device.tags);
  });
});
