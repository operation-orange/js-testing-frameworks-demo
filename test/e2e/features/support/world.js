import path from 'path';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { setWorldConstructor } from 'cucumber';

const pagesPath = path.resolve(__dirname, '../../pages');
const componentsPath = path.resolve(__dirname, '../../components');
const pages = {};
const components = {};

chai.use(chaiAsPromised);

function World({ attach, parameters }) {
  this.attach = attach;
  this.parameters = parameters;
  this.expect = chai.expect;
  this.EC = protractor.ExpectedConditions;

  this.pageCache = {};
  this.componentCache = {};

  this.getComponent = (name) => { // eslint-disable-line complexity
    name = name.replace(/ /g, ''); // eslint-disable-line no-param-reassign

    if (!components[name]) {
      try {
        const module = require(path.resolve(componentsPath, name)); // eslint-disable-line import/no-dynamic-require, global-require, max-len
        components[name] = module.default;
      } catch (err) {
        throw new Error(`Component object ${name} not found at ${componentsPath}/${name}.js`);
      }
    }

    if (!this.componentCache[name]) {
      const component = new components[name](this);
      this.componentCache[name] = component;
    }

    return this.componentCache[name];
  };

  this.getPage = (name) => { // eslint-disable-line complexity
    name = name.replace(/ /g, ''); // eslint-disable-line no-param-reassign

    if (!pages[name]) {
      try {
        const module = require(path.resolve(pagesPath, name)); // eslint-disable-line import/no-dynamic-require, global-require, max-len
        pages[name] = module.default;
      } catch (err) {
        throw new Error(`Page object ${name} not found at ${pagesPath}/${name}.js`);
      }
    }

    if (!this.pageCache[name]) {
      const page = new pages[name](this);
      this.pageCache[name] = page;
    }

    this.currentPage = this.pageCache[name];
    return this.pageCache[name];
  };

  this.setCurrentPage = this.getPage;

  this.getCurrentPage = () => {
    if (!this.currentPage) {
      throw new Error('No page is currently set: a page related step needs to be used before this step such ' +
                'as "When I go to the \'Home\' page"');
    }

    return this.currentPage;
  };
}

setWorldConstructor(World);
