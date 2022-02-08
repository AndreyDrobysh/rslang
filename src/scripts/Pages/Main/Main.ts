import BaseComponent from '../../components/BaseComponent/BaseComponent';
import './main.css';
import Container from '../../container/Container';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import ImgComponent from '../../components/ImgComponent/ImgComponent';

export default class Main extends BaseComponent {
  container: Container;

  backgroundMain: BaseComponent<HTMLDivElement>;

  menuWrap: BaseComponent<HTMLDivElement>;

  listNav: BaseComponent<HTMLDivElement>;

  miniGameBtn: ButtonComponent;

  textbookBtn: ButtonComponent;

  dictionaryBtn: ButtonComponent;

  statisticsBtn: ButtonComponent;

  teamBtn: ButtonComponent;

  reviewsBtn: ButtonComponent;

  mainBtn: ButtonComponent;

  mainImg: ImgComponent;

  mainTextBtn: BaseComponent<HTMLParagraphElement>;

  textbookImg: ImgComponent;

  textbookTextBtn: BaseComponent<HTMLParagraphElement>;

  dictionaryImg: ImgComponent;

  dictionaryTextBtn: BaseComponent<HTMLParagraphElement>;


  miniGameImg: ImgComponent;

  miniGameTextBtn: BaseComponent<HTMLParagraphElement>;


  statisticsImg: ImgComponent;

  statisticsTextBtn: BaseComponent<HTMLParagraphElement>;

  teamImg: ImgComponent;

  teamTextBtn: BaseComponent<HTMLParagraphElement>;

  reviewsImg: ImgComponent;

  reviewsTextBtn: BaseComponent<HTMLParagraphElement>;

  constructor() {
    super('main', ['main']);

    const container = new Container();
    this.addChild(container);
    this.container = container;

    const backgroundMain = new BaseComponent<HTMLDivElement>('div', ['back-main']);
    this.addChild(backgroundMain);
    this.backgroundMain = backgroundMain;

    const menuWrap = new BaseComponent<HTMLDivElement>('div', ['menu-wrap']);
    this.addChild(menuWrap);
    this.menuWrap = menuWrap;

    const listNav = new BaseComponent<HTMLDivElement>('div', ['list-nav']);
    menuWrap.addChild(listNav);
    this.listNav = listNav;

    const mainBtn = new ButtonComponent(['menu_btn']);
    listNav.addChild(mainBtn);
    this.mainBtn = mainBtn;

    const mainImg = new ImgComponent(['menu_img'], 'main.svg');
    mainBtn.addChild(mainImg);
    this.mainImg = mainImg;

    const mainTextBtn = new BaseComponent<HTMLParagraphElement>('p', ['text_btn'], 'Главная');
    mainBtn.addChild(mainTextBtn);
    this.mainTextBtn = mainTextBtn;

    const textbookBtn = new ButtonComponent(['menu_btn']);
    listNav.addChild(textbookBtn);
    this.textbookBtn = textbookBtn;

    const textbookImg = new ImgComponent(['menu_img'], 'book.svg');
    textbookBtn.addChild(textbookImg);
    this.textbookImg = textbookImg;

    const textbookTextBtn = new BaseComponent<HTMLParagraphElement>('p', ['text_btn'], 'Учебник');
    textbookBtn.addChild(textbookTextBtn);
    this.textbookTextBtn = textbookTextBtn;

    const dictionaryBtn = new ButtonComponent(['menu_btn']);
    listNav.addChild(dictionaryBtn);
    this.dictionaryBtn = dictionaryBtn;

    const dictionaryImg = new ImgComponent(['menu_img'], 'dictionary.svg');
    dictionaryBtn.addChild(dictionaryImg);
    this.dictionaryImg = dictionaryImg;

    const dictionaryTextBtn = new BaseComponent<HTMLParagraphElement>('p', ['text_btn'], 'Словарь');
    dictionaryBtn.addChild(dictionaryTextBtn);
    this.dictionaryTextBtn = dictionaryTextBtn;

    const miniGameBtn = new ButtonComponent(['menu_btn']);
    listNav.addChild(miniGameBtn);
    this.miniGameBtn = miniGameBtn;

    const miniGameImg = new ImgComponent(['menu_img'], 'gamepad.svg');
    miniGameBtn.addChild(miniGameImg);
    this.miniGameImg = miniGameImg;

    const miniGameTextBtn = new BaseComponent<HTMLParagraphElement>('p', ['text_btn'], 'Мини игры');
    miniGameBtn.addChild(miniGameTextBtn);
    this.miniGameTextBtn = miniGameTextBtn;

    const statisticsBtn = new ButtonComponent(['menu_btn']);
    listNav.addChild(statisticsBtn);
    this.statisticsBtn = statisticsBtn;

    const statisticsImg = new ImgComponent(['menu_img'], 'statistics.svg');
    statisticsBtn.addChild(statisticsImg);
    this.statisticsImg = statisticsImg;

    const statisticsTextBtn = new BaseComponent<HTMLParagraphElement>('p', ['text_btn'], 'Статистика');
    statisticsBtn.addChild(statisticsTextBtn);
    this.statisticsTextBtn = statisticsTextBtn;

    const teamBtn = new ButtonComponent(['menu_btn']);
    listNav.addChild(teamBtn);
    this.teamBtn = teamBtn;

    const teamImg = new ImgComponent(['menu_img'], 'team.svg');
    teamBtn.addChild(teamImg);
    this.teamImg = teamImg;

    const teamTextBtn = new BaseComponent<HTMLParagraphElement>('p', ['text_btn'], 'Команда');
    teamBtn.addChild(teamTextBtn);
    this.teamTextBtn = teamTextBtn;

    const reviewsBtn = new ButtonComponent(['menu_btn']);
    listNav.addChild(reviewsBtn);
    this.reviewsBtn = reviewsBtn;

    const reviewsImg = new ImgComponent(['menu_img'], 'reviews.svg');
    reviewsBtn.addChild(reviewsImg);
    this.reviewsImg = reviewsImg;

    const reviewsTextBtn = new BaseComponent<HTMLParagraphElement>('p', ['text_btn'], 'Отзывы');
    reviewsBtn.addChild(reviewsTextBtn);
    this.reviewsTextBtn = reviewsTextBtn;
  }
}
