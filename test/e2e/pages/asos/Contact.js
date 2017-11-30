import Page from '../../Page';
import DefaultContact from '../default/Contact';

export default class Contact extends Page {
  constructor(world) {
    super(world, '/contact?brand=asos');

    this.compose(DefaultContact);
  }
}
