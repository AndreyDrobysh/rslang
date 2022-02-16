import BaseComponent from '../components/BaseComponent/BaseComponent';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Pages/Main/Main';

export default class App extends BaseComponent {
  private header: Header;

  private footer: Footer;

  private main: Main;

  constructor() {
    super('div', ['app']);
    this.header = new Header();
    this.footer = new Footer();
    this.main = new Main();
  }

  start(): void {
    this.addChild(this.header);
    this.addChild(this.main);
    this.addChild(this.footer);
  }
}
