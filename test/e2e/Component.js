export default class Component {
  constructor(world, selectors = {}) {
    this.type = 'component';
    this.world = world;
    this.EC = protractor.ExpectedConditions;
    this.selectors = selectors;
    this.components = {};
    this.elementCache = {};
  }

  selectorErrorCheck(selector) {
    if (!this.selectors[selector]) {
      throw new Error(`The selector named '${selector}' does not exist for the ${this.constructor.name} ${this.type}`);
    }
  }

  compose(...args) {
    args.forEach((Comp) => {
      const component = new Comp(this.world);
      const className = component.constructor.name;
      this.components[className] = component;

      Object.keys(component.selectors).forEach((selectorName) => {
        if (this.selectors[selectorName]) {
          throw new Error(`Cannot compose ${className} ${component.type} into the ${this.constructor.name} ` +
                        `${this.type} because there is an element name selector conflict: both have the ` +
                        `same selector name '${selectorName}'`);
        }

        this.selectors[selectorName] = component.selectors[selectorName];
      });
    });
  }

  getComponent(name) {
    if (!this.components[name]) {
      throw new Error(`getComponent(): No component named '${name}' has been composed with the ${this.constructor.name} ` +
                `${this.type}`);
    }

    return this.components[name];
  }

  getElement(selector) {
    this.selectorErrorCheck(selector);

    const byType = typeof this.selectors[selector] === 'string' ?
      by.css(this.selectors[selector]) : this.selectors[selector];

    return element(byType);
  }

  getElements(selector) {
    this.selectorErrorCheck(selector);

    const byType = typeof this.selectors[selector] === 'string' ?
      by.css(this.selectors[selector]) : this.selectors[selector];

    return element.all(byType);
  }

  getPresentElement(selector, timeout = 3000) {
    this.selectorErrorCheck(selector);

    return browser.wait(this.EC.presenceOf(this.getElement(selector)), timeout, 'Timeout waiting for element ' +
            `'${selector}' ('${this.selectors[selector]}') on the ${this.constructor.name} ${this.type} to be ` +
            'present in the DOM')
      .then(() => this.getElement(selector));
  }

  getPresentElements(selector, timeout = 3000) {
    this.selectorErrorCheck(selector);

    return browser.wait(this.EC.presenceOf(this.getElements(selector)), timeout, 'Timeout waiting for elements ' +
            `'${selector}' ('${this.selectors[selector]}') on the ${this.constructor.name} ${this.type} to be ` +
            'present in the DOM')
      .then(() => this.getElements(selector));
  }

  getVisibleElement(selector, timeout = 3000) {
    this.selectorErrorCheck(selector);

    return browser.wait(this.EC.visibilityOf(this.getElement(selector)), timeout, 'Timeout waiting for element ' +
            `'${selector}' ('${this.selectors[selector]}') on the ${this.constructor.name} ${this.type} to be visible`)
      .then(() => this.getElement(selector));
  }

  waitForRemovalOf(selector, timeout = 3000) {
    this.selectorErrorCheck(selector);

    return browser.wait(this.EC.stalenessOf(this.getElement(selector)), timeout, 'Timeout waiting for element ' +
            `'${selector}' ('${this.selectors[selector]}') on the ${this.constructor.name} ${this.type} to be ` +
            'removed from the DOM')
      .then(() => this.getElement(selector));
  }

  waitForInvisibilityOf(selector, timeout = 3000) {
    this.selectorErrorCheck(selector);

    return browser.wait(this.EC.invisibilityOf(this.getElement(selector)), timeout, 'Timeout waiting for element ' +
            `'${selector}' ('${this.selectors[selector]}') on the ${this.constructor.name} ${this.type} to be ` +
            'invisible')
      .then(() => this.getElement(selector));
  }
}
