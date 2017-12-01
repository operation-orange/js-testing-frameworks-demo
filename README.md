## Demo App for Javascript Testing Frameworks
This is a basic React application for the purpose of demonstrating end-to-end functional testing using [Protractor](http://www.protractortest.org/#/)/[Cucumber.js](https://github.com/cucumber/cucumber-js) and layout testing using [Galen](http://galenframework.com/).

### Install & Run
To run the demo application, clone this repo, then run:
```bash
npm install
npm start
```

### Protractor/Cucumber.js Tests
Protractor is the e2e test runner and Cucumber.js the test framework (much like Mocha/Chai respectively for unit testing).

#### Running e2e Tests
You have to first runt the application (above), then:
* `npm run test:e2e` to run tests in GUI mode for both Chrome and Firefox.
* `npm run test:e2e:headless` to run the same but in headless mode (as they would be in the CI pipeline).

The e2e tests live under `./test/e2e` and the resulting e2e HTML report will be generated at `./testOutput/e2e/report/index.html`.

The Cucumber tests executed live under `./test/e2e/features`, the code that backs each step lives at `./test/e2e/stepDefinitions/common.js` and the page objects the feature files reference live under `./test/e2e/pages`.

### Protractor/Cucumber.js Highlights
* An [example](http://protractor.s3-website-eu-west-1.amazonaws.com/) report.
* JavaScript/Node.js based so it's inkeeping with the technology of the main application. Developers can easily understand and write tests (if needed) and are easier to execute both in development and a CI pipeline as it means less dependencies.
* The Protractor framework is an abstraction over [WebDriverJs](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs) making various common tasks much easier (this [article](http://testautomation.applitools.com/post/94994807787/protractor-vs-selenium-which-is-easier) gives some insight). Other benefits include:
  * Easily configurable multi-browser support.
  * Can be run against Selenium Grid (by providing the `seleniumAddress` in the config).
  * 'Sharding' is supported to run multiple WebDriverJs instances at once, taking advantage of multi-core systems and improving performance of running tests. The more tests, the more significant the performance gain.
* Little coding is required to create tests as this implementation of Cucumber.js focuses on heavily on code reusability. Writing a test usually consists of creating human readable feature files (an example [feature](https://github.com/operation-orange/js-testing-frameworks-demo/blob/master/test/e2e/features/default/contactPage/contactForm.feature) file) and simple JS page objects (which will be shared by multiple feature files), representing the page URL and elements you wish to test (an example [page object](https://github.com/operation-orange/js-testing-frameworks-demo/blob/master/test/e2e/pages/default/Contact.js)).
* Most of the horsework is done by a small number of reusuable [step definitions](https://github.com/operation-orange/js-testing-frameworks-demo/blob/master/test/e2e/stepDefinitions/common.js) and a Page Object framework which abstracts over interacting with page elements (see the [World](https://github.com/operation-orange/js-testing-frameworks-demo/blob/master/test/e2e/support/world.js) and [Component](https://github.com/operation-orange/js-testing-frameworks-demo/blob/master/test/e2e/Component.js) classes).

### Galen Layout Testing
_TO DO_
