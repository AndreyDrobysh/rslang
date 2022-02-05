import BaseComponent from '../components/BaseComponent/BaseComponent';
import Header from '../Header/Header';

export default class App extends BaseComponent {
  private header: Header;


  constructor() {
    super('div');
    this.header = new Header;
  }

  start(): void {
    this.addChild(this.header);
  }
}
