import Component from './Component';

export default class Page extends Component {
  constructor(world, pageUrl, selectors) {
    super(world, selectors);

    this.type = 'page';
    this.pageUrl = pageUrl;
  }

  url() {
    return `${browser.baseUrl}${this.pageUrl}`;
  }
}
