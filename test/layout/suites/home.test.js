load('init.js');

testOnAllDevices('Home page test on mobile device', '/brand=topshop', function (driver, device) {
  checkLayout(driver, 'test/layout/suites/home.gspec', device.tags);
});
