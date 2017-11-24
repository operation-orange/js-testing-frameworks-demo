// Have to use setTimeout() here instead of recursive promise chaining as the
// timeout value for the `browser.wait()` that uses this function doesn't kick
// in, uses the default wait of 15 seconds and it doesn't throw the useful error
// message 'Timeout waiting for URL to be...' message
// eslint-disable-next-line import/prefer-default-export, no-unused-vars
export const forUrlToBe = expectedUrl => new Promise((resolve, reject) => {
  const checkCurrentUrl = () => browser.getCurrentUrl().then((currentUrl) => {
    if (currentUrl.replace(/\/$/, '') === expectedUrl.replace(/\/$/, '')) {
      resolve();
    } else {
      setTimeout(checkCurrentUrl, 20);
    }
  });

  checkCurrentUrl();
});
