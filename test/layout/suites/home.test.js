load('init.js');
load('pages/home.js');

testAllDevices('/?brand=topshop', './test/layout/specs/home.gspec', function (driver) {
  return new HomePage(driver).waitForIt();
});
