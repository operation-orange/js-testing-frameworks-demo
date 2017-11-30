import { Given } from 'cucumber';
import { forUrlToBe } from './helpers';

Given(
  /^I go to the ['"](.+)['"] page$/,
  function goToAPage(pageName) {
    const page = this.getPage(pageName);
    browser.get(page.url());
    return this.expect(browser.getCurrentUrl()).to.eventually.equal(page.url());
  }
);

Given(
  /^I arrive at the ['"](.+)['"] page$/,
  function arriveAtAPage(pageName) {
    const page = this.getPage(pageName);
    return browser.wait(forUrlToBe(page.url()), 3000, `Timeout waiting for URL to be ${page.url()}`);
  }
);

Given(
  /^the ['"](.+)['"] element is visible$/,
  function xElementIsVisible(selectorName) {
    return this.getCurrentPage().getVisibleElement(selectorName);
  }
);

Given(
  /^the ['"](.+)['"] element is removed/,
  function xElementIsRemoved(selectorName) {
    return this.getCurrentPage().waitForRemovalOf(selectorName);
  }
);

Given(
  /^the ['"](.+)['"] element is hidden$/,
  function xElementIsHidden(selectorName) {
    return this.getCurrentPage().waitForInvisibilityOf(selectorName);
  }
);

Given(
  /^there are ([0-9]+) ['"](.+)['"] elements$/,
  function xNumberOfElements(elementCount, selectorName) {
    const elements = this.getCurrentPage().getPresentElements(selectorName);

    return this.expect(elements).to.eventually.have.lengthOf(elementCount);
  }
);

Given(
  /^the ['"](.+)['"] element contains the text ['"](.*)['"]$/,
  function xElementComtainsYText(selectorName, headerText) {
    return this.getCurrentPage().getPresentElement(selectorName)
      .then(element => this.expect(element.getText()).to.eventually.equal(headerText));
  }
);

Given(
  /^I enter ['"](.*)['"] into the ['"](.+)['"] field$/,
  function enterXintoYfield(text, fieldName) {
    return this.getCurrentPage().getPresentElement(fieldName)
      .then(element => element.sendKeys(text));
  }
);

Given(
  /^I click the ['"](.+)['"] (button|link|radio button|checkbox)$/,
  function clickX(selectorName, type) { // eslint-disable-line no-unused-vars
    return this.getCurrentPage().getPresentElement(selectorName)
      .then(element => element.click());
  }
);

Given(
  /^the ['"](.+)['"] ([^ ]+) attribute is ['"](.+)['"]$/,
  function xAttributeIsYValue(selectorName, attributeName, attributeValue) {
    const attribute = this.getCurrentPage().getPresentElement(selectorName)
      .then(element => element.getAttribute(attributeName));

    const prefixedUrl = attributeName.match(/(src|href)/) && attributeValue.match(/^\//) ?
      `${browser.baseUrl}${attributeValue}` : null;

    return this.expect(attribute).to.eventually.equal(prefixedUrl || attributeValue);
  }
);

Given(
  /^the ['"](.+)['"] ([^ ]+) CSS value is ['"](.+)['"]$/,
  function xCssValueIsY(selectorName, cssName, cssValue) {
    const attribute = this.getCurrentPage().getPresentElement(selectorName)
      .then(element => element.getCssValue(cssName));

    return this.expect(attribute).to.eventually.equal(cssValue);
  }
);

// "Given I arrive at the {string} page", where the URL is taken from the
// Page object is preferable to this, not only for consistency and easy page
// URL updates, but because this step definition doesn't switch the context to
// the page the URL refers to. Therefore any subsequent steps that refer to
// elements will throw errors as that page context hasn't been set. You would
// have to explicitly use the "I switch context to the {string} page" step
// below to set the page context to then access and assert against that page's
// elements. This step definition should only be used in exceptional
// circumstances (e.g. the page URL has dynamic query parameters in its URL).
Given(
  /^the URL is ['"](.+)['"]$/,
  function theUrlIs(URL) { // eslint-disable-line prefer-arrow-callback
    const fullURL = URL.match(/^\//) ? `${URL}` : URL;
    return browser.wait(forUrlToBe(fullURL), 3000, `Timeout waiting for URL to be ${fullURL}`);
  }
);

// A way to force the switching of the page context if needed in exceptional
// circumstances. E.g. after using the above "the URL is {string}"
// definition step.
Given(
  /^I switch context to the ['"](.+)['"] page$/,
  function switchPageContext(pageName) {
    this.setCurrentPage(pageName);
  }
);
