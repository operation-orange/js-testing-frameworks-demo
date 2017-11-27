import { defineSupportCode } from 'cucumber';
import { forUrlToBe } from './helpers';

// eslint-disable-next-line prefer-arrow-callback
defineSupportCode(function commonStepDefinitions({ Given }) {
  Given(
    'I go the the {string} page',
    function goToAPage(pageName) {
      const page = this.getPage(pageName);
      browser.get(page.url());
      return this.expect(browser.getCurrentUrl()).to.eventually.equal(page.url());
    }
  );

  Given(
    'I arrive at the {string} page',
    function arriveAtAPage(pageName) {
      const page = this.getPage(pageName);
      return browser.wait(forUrlToBe(page.url()), 3000, `Timeout waiting for URL to be ${page.url()}`);
    }
  );

  Given(
    'the {string} element is visible',
    function xElementIsVisible(selectorName) {
      return this.getCurrentPage().getVisibleElement(selectorName);
    }
  );

  Given(
    'the {string} element is removed',
    function xElementIsRemoved(selectorName) {
      return this.getCurrentPage().waitForRemovalOf(selectorName);
    }
  );

  Given(
    'the {string} element is hidden',
    function xElementIsHidden(selectorName) {
      return this.getCurrentPage().waitForInvisibilityOf(selectorName);
    }
  );

  Given(
    'there are {int} {string} elements',
    function xNumberOfElements(elementCount, selectorName) {
      const elements = this.getCurrentPage().getPresentElements(selectorName);

      return this.expect(elements).to.eventually.have.lengthOf(elementCount);
    }
  );

  Given(
    'the {string} element contains the text {string}',
    function xElementComtainsYText(selectorName, headerText) {
      return this.getCurrentPage().getPresentElement(selectorName)
        .then(element => this.expect(element.getText()).to.eventually.equal(headerText));
    }
  );

  Given(
    'I enter {string} into the {string} field',
    function enterXintoYfield(text, fieldName) {
      return this.getCurrentcommonStepDefinitionsPage().getPresentElement(fieldName)
        .then(element => element.sendKeys(text));
    }
  );

  Given(
    'I click the {string} (button|link|radio button|checkbox)',
    function clickX(selectorName, type) { // eslint-disable-line no-unused-vars
      return this.getCurrentPage().getPresentElement(selectorName)
        .then(element => element.click());
    }
  );

  Given(
    'the {string} ([^ ]+) attribute is {string}',
    function xAttributeIsYValue(selectorName, attributeName, attributeValue) {
      const attribute = this.getCurrentPage().getPresentElement(selectorName)
        .then(element => element.getAttribute(attributeName));

      const prefixedUrl = attributeName.match(/(src|href)/) && attributeValue.match(/^\//) ?
        `${attributeValue}` : null;

      return this.expect(attribute).to.eventually.equal(prefixedUrl || attributeValue);
    }
  );

  Given(
    'the {string} ([^ ]+) CSS value is {string}',
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
    'the URL is {string}',
    function theUrlIs(URL) { // eslint-disable-line prefer-arrow-callback
      const fullURL = URL.match(/^\//) ? `${URL}` : URL;
      return browser.wait(forUrlToBe(fullURL), 3000, `Timeout waiting for URL to be ${fullURL}`);
    }
  );

  // A way to force the switching of the page context if needed in exceptional
  // circumstances. E.g. after using the above "the URL is {string}"
  // definition step.
  Given(
    'I switch context to the {string} page',
    function switchPageContext(pageName) {
      this.setCurrentPage(pageName);
    }
  );
});
