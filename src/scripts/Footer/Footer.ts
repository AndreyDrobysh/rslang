import BaseComponent from '../components/BaseComponent/BaseComponent';
import './footer.css';
import Container from '../container/Container';
import ImgComponent from '../components/ImgComponent/ImgComponent';

export default class Footer extends BaseComponent {
  container: Container;

  wrapInfoFooter: BaseComponent<HTMLDivElement>;

  creationYear: BaseComponent<HTMLParagraphElement>;

  authorName: BaseComponent<HTMLParagraphElement>;

  RssImg: ImgComponent;

  constructor() {
    super('footer', ['footer']);

    const container = new Container();
    this.addChild(container);
    this.container = container;

    const wrapInfoFooter = new BaseComponent<HTMLDivElement>('div', ['wrap-info-footer']);
    container.addChild(wrapInfoFooter);
    this.wrapInfoFooter = wrapInfoFooter;

    const creationYear = new BaseComponent<HTMLParagraphElement>('p', ['creation-yeart'], '2021');
    wrapInfoFooter.addChild(creationYear);
    this.creationYear = creationYear;

    const authorName = new BaseComponent<HTMLParagraphElement>('p', ['author-name'], 'Андрей Дробыш');
    wrapInfoFooter.addChild(authorName);
    this.authorName = authorName;

    const RssImg = new ImgComponent(['rss_img'], '', 'icon');
    wrapInfoFooter.addChild(RssImg);
    this.RssImg = RssImg;
  }
}
