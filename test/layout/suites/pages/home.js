this.HomePage = $page('Home page', {
  mainContent: '.App__content',

  load: function () {
    this.open(domain + '/?brand=topshop');
    return this.waitForIt();
  },
  close: function () {
    this.driver.close();
  }
});
