import Page from '../Page';

export default class Home extends Page {
  constructor(world) {
    super(world, '/', {
      mainLogo: '[data-qa-id=main-logo]'
    });
  }
}
