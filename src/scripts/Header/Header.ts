import BaseComponent from '../components/BaseComponent/BaseComponent';
import './header.css';
import Container from '../container/Container';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';


export default class Header extends BaseComponent {
  container: Container;

  wrapInfoHeader: BaseComponent<HTMLDivElement>;

  logoName: BaseComponent<HTMLHeadingElement>;

  authorizationBtn: ButtonComponent;

  constructor() {
    super('header', ['header']);

    const container = new Container();
    this.addChild(container);
    this.container = container;

    const wrapInfoHeader = new BaseComponent<HTMLDivElement>('div', ['wrap-info-header']);
    container.addChild(wrapInfoHeader);
    this.wrapInfoHeader = wrapInfoHeader;

    const logoName = new BaseComponent<HTMLHeadingElement>('h1', ['logo-name'], 'RSLang');
    wrapInfoHeader.addChild(logoName);
    this.logoName = logoName;
   
    const authorizationBtn = new ButtonComponent(['authorization_btn']);
    wrapInfoHeader.addChild(authorizationBtn);
    this.authorizationBtn = authorizationBtn;

    


  }
}
