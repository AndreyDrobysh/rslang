import BaseComponent from '../../components/BaseComponent/BaseComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import ImgComponent from '../../components/ImgComponent/ImgComponent';
import './textbook.css';

export default class Textbook extends BaseComponent {
  backgroundTextbook: BaseComponent<HTMLDivElement>;

  sectionTitleTextBook: BaseComponent<HTMLParagraphElement>;

  menuBookBtnWrap: BaseComponent<HTMLDivElement>;

  sectionNumBookBtn: ButtonComponent;

  numSectionTextBook: BaseComponent<HTMLParagraphElement>;

  folderInBtnSectionImg: ImgComponent;

  numPageBookWrap: BaseComponent<HTMLDivElement>;

  pastPageBookBtn: ButtonComponent;

  nextPageBookBtn: ButtonComponent;

  pageImg: ImgComponent;

  numPageTextBook: BaseComponent<HTMLParagraphElement>;

  nowPageBookBtn: ButtonComponent;

  gameBtnInTextbook: ButtonComponent;

  gamepadInBtnGameImg: ImgComponent;

  textGameInTextBook: BaseComponent<HTMLParagraphElement>;

  settingsBtnInTextbook: ButtonComponent;

  settingsInBtnGameImg: ImgComponent;

  settingsTextInTextBook: BaseComponent<HTMLParagraphElement>;

  // Settings Form

  settingFormWrap?: BaseComponent<HTMLDivElement>;

  settingsTextForm?: BaseComponent<HTMLParagraphElement>;

  closeFormBtn?: ButtonComponent;

  closeFormImg?: ImgComponent;
  
  // Word
  wordInBookWrap?: BaseComponent<HTMLDivElement>;

  wordImg?: ImgComponent;

  infoWordWrap?: BaseComponent<HTMLDivElement>;

  constructor() {
    super('div');

    const backgroundTextbook = new BaseComponent<HTMLDivElement>('div', ['back-textbook']);
    this.addChild(backgroundTextbook);
    this.backgroundTextbook = backgroundTextbook;

    const sectionTitleTextBook = new BaseComponent<HTMLParagraphElement>('p', ['section-title-textbook'], 'Учебник');
    backgroundTextbook.addChild(sectionTitleTextBook);
    this.sectionTitleTextBook = sectionTitleTextBook;

    const menuBookBtnWrap = new BaseComponent<HTMLDivElement>('div', ['menu-book-wrap_btn']);
    backgroundTextbook.addChild(menuBookBtnWrap);
    this.menuBookBtnWrap = menuBookBtnWrap;

    //  РАЗДЕЛ
    const sectionNumBookBtn = new ButtonComponent(['section-num-book_btn']);
    menuBookBtnWrap.addChild(sectionNumBookBtn);
    this.sectionNumBookBtn = sectionNumBookBtn;

    const folderInBtnSectionImg = new ImgComponent(['folder-section_btn'], 'folder.svg');
    sectionNumBookBtn.addChild(folderInBtnSectionImg);
    this.folderInBtnSectionImg = folderInBtnSectionImg;

    const numSectionTextBook = new BaseComponent<HTMLParagraphElement>('p', ['num-section-book'], 'Раздел 1');
    sectionNumBookBtn.addChild(numSectionTextBook);
    this.numSectionTextBook = numSectionTextBook;

    // Page
    const numPageBookWrap = new BaseComponent<HTMLDivElement>('div', ['num-page-wrap']);
    menuBookBtnWrap.addChild(numPageBookWrap);
    this.numPageBookWrap = numPageBookWrap;

    const pastPageBookBtn = new ButtonComponent(['past-page-book_btn'], '<');
    numPageBookWrap.addChild(pastPageBookBtn);
    this.pastPageBookBtn = pastPageBookBtn;

    const nowPageBookBtn = new ButtonComponent(['now-page-book_btn']);
    numPageBookWrap.addChild(nowPageBookBtn);
    this.nowPageBookBtn = nowPageBookBtn;

    const pageImg = new ImgComponent(['page_img'], 'page.svg');
    nowPageBookBtn.addChild(pageImg);
    this.pageImg = pageImg;

    const numPageTextBook = new BaseComponent<HTMLParagraphElement>('p', ['num-page-book'], 'Страница 1');
    nowPageBookBtn.addChild(numPageTextBook);
    this.numPageTextBook = numPageTextBook;

    const nextPageBookBtn = new ButtonComponent(['next-page-book_btn'], '>');
    numPageBookWrap.addChild(nextPageBookBtn);
    this.nextPageBookBtn = nextPageBookBtn;

    // Game
    const gameBtnInTextbook = new ButtonComponent(['game-in-textbook_btn']);
    menuBookBtnWrap.addChild(gameBtnInTextbook);
    this.gameBtnInTextbook = gameBtnInTextbook;

    const gamepadInBtnGameImg = new ImgComponent(['folder-game-in-book_img'], 'gamepad.svg');
    gameBtnInTextbook.addChild(gamepadInBtnGameImg);
    this.gamepadInBtnGameImg = gamepadInBtnGameImg;

    const textGameInTextBook = new BaseComponent<HTMLParagraphElement>('p', ['text-game-book'], 'Игры');
    gameBtnInTextbook.addChild(textGameInTextBook);
    this.textGameInTextBook = textGameInTextBook;

    // Settings
    const settingsBtnInTextbook = new ButtonComponent(['settings-in-textbook_btn']);
    menuBookBtnWrap.addChild(settingsBtnInTextbook);
    settingsBtnInTextbook.onClick(():void => {
      console.log(21);
      
      this.settingsMenu();
    })
    this.settingsBtnInTextbook = settingsBtnInTextbook;

    const settingsInBtnGameImg = new ImgComponent(['settings-in-book_img'], 'settings.svg');
    settingsBtnInTextbook.addChild(settingsInBtnGameImg);
    this.settingsInBtnGameImg = settingsInBtnGameImg;

    const settingsTextInTextBook = new BaseComponent<HTMLParagraphElement>('p', ['text-settings-book'], 'Настройки');
    settingsBtnInTextbook.addChild(settingsTextInTextBook);
    this.settingsTextInTextBook = settingsTextInTextBook;

    // Words

    for (let i = 0; i < 10; i++) {
      const wordInBookWrap = new BaseComponent<HTMLDivElement>('div', ['word-in-book-wrap']);
      this.backgroundTextbook.addChild(wordInBookWrap);
      this.wordInBookWrap = wordInBookWrap;

      const wordImg = new ImgComponent(['word_img'], 'book.svg');
      wordInBookWrap.addChild(wordImg);
      this.wordImg = wordImg;

      const infoWordWrap = new BaseComponent<HTMLDivElement>('div', ['info-word-wrap'], 'Что-то');
      wordInBookWrap.addChild(infoWordWrap);  
      this.infoWordWrap = infoWordWrap;
    }

    

  }

  settingsMenu() {
    const settingFormWrap = new BaseComponent<HTMLDivElement>('div', ['settings-form-wrap']);
    this.backgroundTextbook.addChild(settingFormWrap);
    this.settingFormWrap = settingFormWrap;

    const settingsTextForm = new BaseComponent<HTMLParagraphElement>('p', ['text-settings-book'], 'Настройки');
    settingFormWrap.addChild(settingsTextForm);
    this.settingsTextForm = settingsTextForm;

    // Cross
    const closeFormBtn = new ButtonComponent(['close-form_btn']);
    settingFormWrap.addChild(closeFormBtn);
    this.closeFormBtn = closeFormBtn;

    const closeFormImg = new ImgComponent(['close-form_img'], 'cross.svg');
    closeFormBtn.addChild(closeFormImg);
    this.closeFormImg = closeFormImg;
    
    // First point

  };

}