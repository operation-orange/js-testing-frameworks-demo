test("Home page test on mobile device", function() {
  var driver = createDriver("http://localhost:3000?brand=topshop", "640x480", "chrome");

  checkLayout(driver, "test/layout/suites/home.gspec", ["all", "desktop"]);
});
