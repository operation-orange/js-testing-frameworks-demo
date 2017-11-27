import { defineSupportCode, Status } from 'cucumber';

defineSupportCode(({ Before, After }) => {
  Before(function beforeHook(testCase) {
    var world = this;
    this.attach('Poo');
  });

  After(function afterHook(testCase) {
    const world = this;
    if (testCase.result.status === Status.FAILED) {
      return browser.takeScreenshot().then((screenShot) => {
        world.attach(screenShot, 'image/png');
      });
    }

    return Promise.resolve();
  });
});
