import Page from '../../Page';
import DefaultHome from '../default/Home';

export default class Home extends Page {
  constructor(world) {
    super(world, '/?brand=asos');

    this.compose(DefaultHome);
  }
}
