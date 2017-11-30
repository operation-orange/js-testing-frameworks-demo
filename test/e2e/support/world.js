import path from 'path';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { setWorldConstructor } from 'cucumber';

const pagesPath = path.resolve(__dirname, '../pages');
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

  this.componentCache = {};

  this.getComponent = (name, type = 'component') => {
    const classPath = name.split(' - ')
      .map((w, i, nameArray) => {
        if (i !== nameArray.length - 1) {
          return toCamelCase(w);
        }

        return toTitleCase(w);
      })
      .join('/');

    if (!components[classPath]) {
      try {
        const module = require(path.resolve(pagesPath, classPath)); // eslint-disable-line import/no-dynamic-require, global-require, max-len
        components[classPath] = module.default;
      } catch (err) {
        throw new Error(`${toTitleCase(type)} object ${classPath} not found at ${pagesPath}/${classPath}.js`);
      }
    }

    if (!this.componentCache[classPath]) {
      const component = new components[classPath](this);
      this.componentCache[classPath] = component;
    }

    return this.componentCache[classPath];
  };

  this.getPage = (name) => {
    const page = this.getComponent(name, 'page');
    this.currentPage = page;
    return page;
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
