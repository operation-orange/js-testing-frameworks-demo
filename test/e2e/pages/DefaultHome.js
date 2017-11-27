import Page from '../Page';
import MainHeader from '../components/MainHeader';

export default class DefaultHome extends Page {
  constructor(world) {
    super(world, '/', {
      topshop: '[data-qa-id=topshop-button]',
      asos: '[data-qa-id=asos-button]',
      next: '[data-qa-id=next-button]'
    });

    this.compose(MainHeader);
  }
}
