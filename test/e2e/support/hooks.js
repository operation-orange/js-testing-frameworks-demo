import { defineSupportCode, Status } from 'cucumber';

defineSupportCode(({ After }) => {
  After(function afterHook(testCase) {
    const world = this;
    if (testCase.result.status === Status.FAILED) {
      return browser.takeScreenshot().then((screenShot) => {
        world.attach(screenShot, 'image/png');
      });
    }

    return null;
  });
});
