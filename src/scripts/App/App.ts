import BaseComponent from '../components/BaseComponent/BaseComponent';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default class App extends BaseComponent {
  private header: Header;

  private footer: Footer;


  constructor() {
    super('div');
    this.header = new Header;
    this.footer = new Footer;
  }

  start(): void {
    this.addChild(this.header);
    this.addChild(this.footer);
  }
}
