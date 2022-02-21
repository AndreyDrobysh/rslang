import BaseComponent from '../../components/BaseComponent/BaseComponent';
import './main.css';
import Container from '../../container/Container';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import ImgComponent from '../../components/ImgComponent/ImgComponent';
import Textbook from '../Textbook/Textbook';
import Game from '../Game/Game';
import Team from '../Team/Team';

const INFO_ABOUT_APP = [
  {
    adressImg: 'aboutApp/gamepad-app.svg',
    namePoit: 'Игры',
    textPoit: 'Разные игры помогают учить без скуки с результатом',
  },
  {
    adressImg: 'listNav/statistics.svg',
    namePoit: 'Статистика',
    textPoit: 'Правильно оценивай свой уровень знаний по статистике',
  },
  {
    adressImg: 'aboutApp/knowledge.svg',
    namePoit: 'Знания',
    textPoit: 'Отмечай выученное, получай только новые знания',
  },
  {
    adressImg: 'settings.svg',
    namePoit: 'Настройки',
    textPoit: 'Сложность меняется в зависимости от установок',
  },
  {
    adressImg: 'aboutApp/repeat.svg',
    namePoit: 'Повтор',
    textPoit: 'Уникальная система интервального повторения',
  },
];

export default class Main extends BaseComponent {
  private textbook: Textbook;

  private game: Game;

  private team: Team;

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

  aboutAppMain?: BaseComponent<HTMLParagraphElement>;

  mainBtnWrap?: BaseComponent<HTMLDivElement>;

  registrationBtn?: ButtonComponent;

  aboutAppBtn?: ButtonComponent;

  // About App

  aboutAppBack?: BaseComponent<HTMLDivElement>;

  aboutAppWrap?: BaseComponent<HTMLDivElement>;

  aboutAppTextForm?: BaseComponent<HTMLParagraphElement>;

  allPointAppWrap?: BaseComponent<HTMLDivElement>;

  pointAppWrap?: BaseComponent<HTMLDivElement>;

  pointAppImg?: ImgComponent;

  nameAppText?: BaseComponent<HTMLParagraphElement>;

  discAppText?: BaseComponent<HTMLParagraphElement>;

  headerAppTextForm?: BaseComponent<HTMLParagraphElement>;

  teamBtnInForm?: ButtonComponent;

  crossInFormWrap?: ButtonComponent;

  crossInFormBtn?: ImgComponent;

  // Statistics

  backgroundStatistics?: BaseComponent<HTMLDivElement>;

  // Team

  backgroundTeam?: BaseComponent<HTMLDivElement>;

  // Reviews

  backgroundReviews?: BaseComponent<HTMLDivElement>;

  constructor() {
    super('main', ['main']);

    this.textbook = new Textbook();
    this.game = new Game();
    this.team = new Team();

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

    const mainImg = new ImgComponent(['menu_img'], 'listNav/main.svg', 'main');
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

    const textbookImg = new ImgComponent(['menu_img'], 'listNav/book.svg', 'book');
    textbookBtn.addChild(textbookImg);
    this.textbookImg = textbookImg;

    const textbookTextBtn = new BaseComponent<HTMLParagraphElement>('p', ['text_btn'], 'Учебник');
    textbookBtn.addChild(textbookTextBtn);
    this.textbookTextBtn = textbookTextBtn;

    const miniGameBtn = new ButtonComponent(['menu_btn']);
    listNav.addChild(miniGameBtn);
    miniGameBtn.onClick(():void => {
      mainInfo.clearChildren();
      localStorage.setItem('sitePage', 'game');
      mainInfo.addChild(this.game);
    });
    this.miniGameBtn = miniGameBtn;

    const miniGameImg = new ImgComponent(['menu_img'], 'listNav/gamepad.svg', 'game');
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

    const statisticsImg = new ImgComponent(['menu_img'], 'listNav/statistics.svg', 'stat');
    statisticsBtn.addChild(statisticsImg);
    this.statisticsImg = statisticsImg;

    const statisticsTextBtn = new BaseComponent<HTMLParagraphElement>('p', ['text_btn'], 'Статистика');
    statisticsBtn.addChild(statisticsTextBtn);
    this.statisticsTextBtn = statisticsTextBtn;

    const teamBtn = new ButtonComponent(['menu_btn']);
    listNav.addChild(teamBtn);
    teamBtn.onClick(():void => {
      mainInfo.clearChildren();
      localStorage.setItem('sitePage', 'team');
      mainInfo.addChild(this.team);
    });
    this.teamBtn = teamBtn;

    const teamImg = new ImgComponent(['menu_img'], 'listNav/team.svg', 'team');
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

    const reviewsImg = new ImgComponent(['menu_img'], 'listNav/reviews.svg', 'reviews');
    reviewsBtn.addChild(reviewsImg);
    this.reviewsImg = reviewsImg;

    const reviewsTextBtn = new BaseComponent<HTMLParagraphElement>('p', ['text_btn'], 'Отзывы');
    reviewsBtn.addChild(reviewsTextBtn);
    this.reviewsTextBtn = reviewsTextBtn;

    const sitePageName = localStorage.getItem('sitePage');

    if (sitePageName === 'textbook') {
      mainInfo.addChild(this.textbook);
    } else if (sitePageName === 'game') {
      mainInfo.addChild(this.game);
    } else if (sitePageName === 'team') {
      mainInfo.addChild(this.team);
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

    const aboutAppMain = new BaseComponent<HTMLParagraphElement>('p', ['about-app-main'], 'Быстрый и удобный способ выучить английский');
    backgroundMain.addChild(aboutAppMain);
    this.aboutAppMain = aboutAppMain;

    const mainBtnWrap = new BaseComponent<HTMLDivElement>('div', ['main-wrap-btn']);
    backgroundMain.addChild(mainBtnWrap);
    this.mainBtnWrap = mainBtnWrap;

    const registrationBtn = new ButtonComponent(['registration_btn'], 'Регистрация');
    mainBtnWrap.addChild(registrationBtn);
    this.registrationBtn = registrationBtn;

    const aboutAppBtn = new ButtonComponent(['about-app_btn'], 'О приложении');
    mainBtnWrap.addChild(aboutAppBtn);
    aboutAppBtn.onClick(():void => {
      this.aboutApp();
    });
    this.aboutAppBtn = aboutAppBtn;

    localStorage.setItem('sitePage', 'main');
  }

  aboutApp() {
    const aboutAppBack = new BaseComponent<HTMLDivElement>('div', ['back-about-app']);
    this.mainInfo.addChild(aboutAppBack);
    this.aboutAppBack = aboutAppBack;

    const aboutAppWrap = new BaseComponent<HTMLDivElement>('div', ['about-app-wrap']);
    aboutAppBack.addChild(aboutAppWrap);
    this.aboutAppWrap = aboutAppWrap;

    const headerAppTextForm = new BaseComponent<HTMLParagraphElement>('p', ['header-app-text-form'], 'Как всё устроено');
    aboutAppWrap.addChild(headerAppTextForm);
    this.headerAppTextForm = headerAppTextForm;

    const aboutAppTextForm = new BaseComponent<HTMLParagraphElement>('p', ['about-app-text-form'], 'Приложение для изучения иностранных слов с техникой интервального повторения, отслеживания индивидуального прогресса и мини-игр.');
    aboutAppWrap.addChild(aboutAppTextForm);
    this.aboutAppTextForm = aboutAppTextForm;

    const allPointAppWrap = new BaseComponent<HTMLDivElement>('div', ['all-point-app-wrap']);
    aboutAppWrap.addChild(allPointAppWrap);
    this.allPointAppWrap = allPointAppWrap;

    for (let i = 0; i < 5; i++) {
      const pointAppWrap = new BaseComponent<HTMLDivElement>('div', ['point-app-wrap']);
      allPointAppWrap.addChild(pointAppWrap);
      this.pointAppWrap = pointAppWrap;

      const pointAppImg = new ImgComponent(['point-app_img'], `${INFO_ABOUT_APP[i].adressImg}`, 'main');
      pointAppWrap.addChild(pointAppImg);
      this.pointAppImg = pointAppImg;

      const nameAppText = new BaseComponent<HTMLParagraphElement>('p', ['name-app-text'], `${INFO_ABOUT_APP[i].namePoit}`);
      pointAppWrap.addChild(nameAppText);
      this.nameAppText = nameAppText;

      const discAppText = new BaseComponent<HTMLParagraphElement>('p', ['disc-app-text'], `${INFO_ABOUT_APP[i].textPoit}`);
      pointAppWrap.addChild(discAppText);
      this.discAppText = discAppText;
    }

    const teamBtnInForm = new ButtonComponent(['team-in-form_btn'], 'Разработчики');
    aboutAppWrap.addChild(teamBtnInForm);
    teamBtnInForm.onClick(():void => {
      this.mainInfo.clearChildren();
      this.reviews();
    });
    this.teamBtnInForm = teamBtnInForm;

    const crossInFormWrap = new ButtonComponent(['cross-in-form-wrap']);
    aboutAppWrap.addChild(crossInFormWrap);
    crossInFormWrap.onClick(():void => {
      this.mainInfo.clearChildren();
      this.main();
    });
    this.crossInFormWrap = crossInFormWrap;

    const crossInFormBtn = new ImgComponent(['cross-in-form_img'], 'cross.svg', 'cross');
    crossInFormWrap.addChild(crossInFormBtn);
    this.crossInFormBtn = crossInFormBtn;
  }

  statistics() {
    const backgroundStatistics = new BaseComponent<HTMLDivElement>('div', ['back-statistics']);
    this.mainInfo.addChild(backgroundStatistics);
    this.backgroundStatistics = backgroundStatistics;
  }

  reviews() {
    const backgroundReviews = new BaseComponent<HTMLDivElement>('div', ['back-reviews']);
    this.mainInfo.addChild(backgroundReviews);
    this.backgroundReviews = backgroundReviews;
  }
}
// mongodb+srv://Andrey:Olga7827290@cluster0.hyu1y.mongodb.net/Hello?retryWrites=true&w=majority
