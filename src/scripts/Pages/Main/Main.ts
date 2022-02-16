import BaseComponent from '../../components/BaseComponent/BaseComponent';
import './main.css';
import Container from '../../container/Container';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import ImgComponent from '../../components/ImgComponent/ImgComponent';
import Textbook from '../Textbook/Textbook';

export default class Main extends BaseComponent {
  private textbook: Textbook;

  container: Container;

  menuWrap: BaseComponent<HTMLDivElement>;

  mainInfo: BaseComponent<HTMLDivElement>;

  listNav: BaseComponent<HTMLDivElement>;

  miniGameBtn: ButtonComponent;

  textbookBtn: ButtonComponent;

  statisticsBtn: ButtonComponent;

  teamBtn: ButtonComponent;

  reviewsBtn: ButtonComponent;

  mainBtn: ButtonComponent;

  mainImg: ImgComponent;

  mainTextBtn: BaseComponent<HTMLParagraphElement>;

  textbookImg: ImgComponent;

  textbookTextBtn: BaseComponent<HTMLParagraphElement>;

  miniGameImg: ImgComponent;

  miniGameTextBtn: BaseComponent<HTMLParagraphElement>;

  statisticsImg: ImgComponent;

  statisticsTextBtn: BaseComponent<HTMLParagraphElement>;

  teamImg: ImgComponent;

  teamTextBtn: BaseComponent<HTMLParagraphElement>;

  reviewsImg: ImgComponent;

  reviewsTextBtn: BaseComponent<HTMLParagraphElement>;

  // Main

  backgroundMain?: BaseComponent<HTMLDivElement>;

  nameApp?: BaseComponent<HTMLParagraphElement>;

  // Dictionary

  backgroundDictionary?: BaseComponent<HTMLDivElement>;

  // Game

  backgroundGame?: BaseComponent<HTMLDivElement>;

  // Statistics

  backgroundStatistics?: BaseComponent<HTMLDivElement>;

  // Team

  backgroundTeam?: BaseComponent<HTMLDivElement>;

  // Reviews

  backgroundReviews?: BaseComponent<HTMLDivElement>;

  constructor() {
    super('main', ['main']);

    this.textbook = new Textbook();

    const container = new Container();
    this.addChild(container);
    this.container = container;

    const mainInfo = new BaseComponent<HTMLDivElement>('div', ['main-info']);
    this.addChild(mainInfo);
    this.mainInfo = mainInfo;

    const menuWrap = new BaseComponent<HTMLDivElement>('div', ['menu-wrap']);
    container.addChild(menuWrap);
    this.menuWrap = menuWrap;

    const listNav = new BaseComponent<HTMLDivElement>('div', ['list-nav']);
    menuWrap.addChild(listNav);
    this.listNav = listNav;

    const mainBtn = new ButtonComponent(['menu_btn']);
    listNav.addChild(mainBtn);
    mainBtn.onClick(():void => {
      mainInfo.clearChildren();
      this.main();
    });
    this.mainBtn = mainBtn;

    const mainImg = new ImgComponent(['menu_img'], 'main.svg');
    mainBtn.addChild(mainImg);
    this.mainImg = mainImg;

    const mainTextBtn = new BaseComponent<HTMLParagraphElement>('p', ['text_btn'], 'Главная');
    mainBtn.addChild(mainTextBtn);
    this.mainTextBtn = mainTextBtn;

    const textbookBtn = new ButtonComponent(['menu_btn']);
    listNav.addChild(textbookBtn);
    textbookBtn.onClick(():void => {
      mainInfo.clearChildren();
      localStorage.setItem('sitePage', 'textbook');
      mainInfo.addChild(this.textbook);
    });
    this.textbookBtn = textbookBtn;

    const textbookImg = new ImgComponent(['menu_img'], 'book.svg');
    textbookBtn.addChild(textbookImg);
    this.textbookImg = textbookImg;

    const textbookTextBtn = new BaseComponent<HTMLParagraphElement>('p', ['text_btn'], 'Учебник');
    textbookBtn.addChild(textbookTextBtn);
    this.textbookTextBtn = textbookTextBtn;

    const miniGameBtn = new ButtonComponent(['menu_btn']);
    listNav.addChild(miniGameBtn);
    miniGameBtn.onClick(():void => {
      mainInfo.clearChildren();
      this.game();
    });
    this.miniGameBtn = miniGameBtn;

    const miniGameImg = new ImgComponent(['menu_img'], 'gamepad.svg');
    miniGameBtn.addChild(miniGameImg);
    this.miniGameImg = miniGameImg;

    const miniGameTextBtn = new BaseComponent<HTMLParagraphElement>('p', ['text_btn'], 'Игры');
    miniGameBtn.addChild(miniGameTextBtn);
    this.miniGameTextBtn = miniGameTextBtn;

    const statisticsBtn = new ButtonComponent(['menu_btn']);
    listNav.addChild(statisticsBtn);
    statisticsBtn.onClick(():void => {
      mainInfo.clearChildren();
      this.statistics();
    });
    this.statisticsBtn = statisticsBtn;

    const statisticsImg = new ImgComponent(['menu_img'], 'statistics.svg');
    statisticsBtn.addChild(statisticsImg);
    this.statisticsImg = statisticsImg;

    const statisticsTextBtn = new BaseComponent<HTMLParagraphElement>('p', ['text_btn'], 'Статистика');
    statisticsBtn.addChild(statisticsTextBtn);
    this.statisticsTextBtn = statisticsTextBtn;

    const teamBtn = new ButtonComponent(['menu_btn']);
    listNav.addChild(teamBtn);
    teamBtn.onClick(():void => {
      mainInfo.clearChildren();
      this.team();
    });
    this.teamBtn = teamBtn;

    const teamImg = new ImgComponent(['menu_img'], 'team.svg');
    teamBtn.addChild(teamImg);
    this.teamImg = teamImg;

    const teamTextBtn = new BaseComponent<HTMLParagraphElement>('p', ['text_btn'], 'Команда');
    teamBtn.addChild(teamTextBtn);
    this.teamTextBtn = teamTextBtn;

    const reviewsBtn = new ButtonComponent(['menu_btn']);
    listNav.addChild(reviewsBtn);
    reviewsBtn.onClick(():void => {
      mainInfo.clearChildren();
      this.reviews();
    });
    this.reviewsBtn = reviewsBtn;

    const reviewsImg = new ImgComponent(['menu_img'], 'reviews.svg');
    reviewsBtn.addChild(reviewsImg);
    this.reviewsImg = reviewsImg;

    const reviewsTextBtn = new BaseComponent<HTMLParagraphElement>('p', ['text_btn'], 'Отзывы');
    reviewsBtn.addChild(reviewsTextBtn);
    this.reviewsTextBtn = reviewsTextBtn;

    const sitePageName = localStorage.getItem('sitePage');

    if (sitePageName === 'textbook') {
      mainInfo.addChild(this.textbook);
    } else {
      this.main();
    }
  }

  main() {
    const backgroundMain = new BaseComponent<HTMLDivElement>('div', ['back-main']);
    this.mainInfo.addChild(backgroundMain);
    this.backgroundMain = backgroundMain;

    const nameApp = new BaseComponent<HTMLParagraphElement>('p', ['name-app'], 'RSLang');
    backgroundMain.addChild(nameApp);
    this.nameApp = nameApp;

    localStorage.setItem('sitePage', 'main');
  }

  game() {
    const backgroundGame = new BaseComponent<HTMLDivElement>('div', ['back-game']);
    this.mainInfo.addChild(backgroundGame);
    this.backgroundGame = backgroundGame;
  }

  statistics() {
    const backgroundStatistics = new BaseComponent<HTMLDivElement>('div', ['back-statistics']);
    this.mainInfo.addChild(backgroundStatistics);
    this.backgroundStatistics = backgroundStatistics;
  }

  team() {
    const backgroundTeam = new BaseComponent<HTMLDivElement>('div', ['back-team']);
    this.mainInfo.addChild(backgroundTeam);
    this.backgroundTeam = backgroundTeam;
  }

  reviews() {
    const backgroundReviews = new BaseComponent<HTMLDivElement>('div', ['back-reviews']);
    this.mainInfo.addChild(backgroundReviews);
    this.backgroundReviews = backgroundReviews;
  }
}
// mongodb+srv://Andrey:Olga7827290@cluster0.hyu1y.mongodb.net/Hello?retryWrites=true&w=majority
