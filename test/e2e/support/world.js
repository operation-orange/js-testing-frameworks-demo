import path from 'path';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { setWorldConstructor } from 'cucumber';

const pagesPath = path.resolve(__dirname, '../pages');
const componentsPath = path.resolve(__dirname, '../components');
const pages = {};
const components = {};

chai.use(chaiAsPromised);

const toCamelCase = str => str.split(' ').map((word, index) => {
  if (index === 0) {
    return word.toLowerCase();
  }

  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}).join('');

const toTitleCase = str => str.split(' ')
  .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
  .join('');

function World({ attach, parameters }) {
  this.attach = attach;
  this.parameters = parameters;
  this.expect = chai.expect;
  this.EC = protractor.ExpectedConditions;

  this.pageCache = {};
  this.componentCache = {};

  this.getComponent = (name) => {
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

  this.getPage = (name) => {
    const classPath = name.split(' - ')
      .map((w, i, nameArray) => {
        if (i !== nameArray.length - 1) {
          return toCamelCase(w);
        }

        return toTitleCase(w);
      })
      .join('/');

    if (!pages[classPath]) {
      try {
        const module = require(path.resolve(pagesPath, classPath)); // eslint-disable-line import/no-dynamic-require, global-require, max-len
        pages[classPath] = module.default;
      } catch (err) {
        throw new Error(`Page object ${classPath} not found at ${pagesPath}/${classPath}.js`);
      }
    }

    if (!this.pageCache[classPath]) {
      const page = new pages[classPath](this);
      this.pageCache[classPath] = page;
    }

    this.currentPage = this.pageCache[classPath];
    return this.pageCache[classPath];
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
