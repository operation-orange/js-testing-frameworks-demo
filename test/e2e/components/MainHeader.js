import Component from '../Component';

export default class MainHeader extends Component {
  constructor(world) {
    super(world, {
      mainLogo: '[data-qa-id=main-logo]',
      mainTitle: '[data-qa-id=main-title]'
    });
  }
}
