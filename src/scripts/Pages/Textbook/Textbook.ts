import BaseComponent from '../../components/BaseComponent/BaseComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import ImgComponent from '../../components/ImgComponent/ImgComponent';
import './textbook.css';
import { getWords } from '../../Api/api';
import Game from '../Game/Game';

const group = +(localStorage.getItem('group') || 0);

let page = +(localStorage.getItem('page') || 0);

const GROUP_COLOR_NUM = [
  {
    numGroup: 'Раздел 1',
    backColor: 'rgb(165, 214, 167)',
  },
  {
    numGroup: 'Раздел 2',
    backColor: 'rgb(129, 212, 250)',
  },
  {
    numGroup: 'Раздел 3',
    backColor: 'rgb(159, 168, 218)',
  },
  {
    numGroup: 'Раздел 4',
    backColor: 'rgb(188, 170, 164)',
  },
  {
    numGroup: 'Раздел 5',
    backColor: 'rgb(255, 204, 128)',
  },
  {
    numGroup: 'Раздел 6',
    backColor: 'rgb(239, 154, 154)',
  },
  {
    numGroup: 'Раздел 7',
    backColor: 'purple',
  },
];

export default class Textbook extends BaseComponent {
  private game: Game;

  backgroundTextbook: BaseComponent<HTMLDivElement>;

  sectionTitleTextBook: BaseComponent<HTMLParagraphElement>;

  menuBookBtnWrap: BaseComponent<HTMLDivElement>;

  // Group
  groupWrap: BaseComponent<HTMLDivElement>;

  sectionNumBookBtn?: ButtonComponent;

  numSectionTextBook?: BaseComponent<HTMLParagraphElement>;

  folderInBtnSectionImg?: ImgComponent;

  changeGroupBtn?: ButtonComponent;

  allGroupWrap?: BaseComponent<HTMLDivElement>;

  folderChangeGroup?: ImgComponent;

  numSectionTextBookChange?: BaseComponent<HTMLParagraphElement>;

  // Page
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
  allWordsWrap: BaseComponent<HTMLDivElement>;

  wordInBookWrap?: BaseComponent<HTMLDivElement>;

  wordImg?: ImgComponent;

  infoWordWrap?: BaseComponent<HTMLDivElement>;

  wordAndTranscriptWrap?: BaseComponent<HTMLDivElement>;

  audioBtn?: ButtonComponent;

  enWordTranscript?: BaseComponent<HTMLSpanElement>;

  transcription?: BaseComponent<HTMLSpanElement>;

  translateWord?: BaseComponent<HTMLParagraphElement>;

  enTextMeaning?: BaseComponent<HTMLParagraphElement>;

  enTextMeaningTranslate?: BaseComponent<HTMLParagraphElement>;

  enTextExample?: BaseComponent<HTMLParagraphElement>;

  enTextExampleTranslate?: BaseComponent<HTMLParagraphElement>;

  audioImg?: ImgComponent;

  pointWordImg?: BaseComponent<HTMLDivElement>;

  constructor() {
    super('div', ['back-textbook']);

    this.game = new Game();

    this.getInfoWords(group);

    const backgroundTextbook = new BaseComponent<HTMLDivElement>('div', ['back-textbook-two']);
    this.addChild(backgroundTextbook);
    this.backgroundTextbook = backgroundTextbook;

    // Words

    const allWordsWrap = new BaseComponent<HTMLDivElement>('div', ['all-words-wrap']);
    this.backgroundTextbook.addChild(allWordsWrap);
    this.allWordsWrap = allWordsWrap;
    // End Words

    const sectionTitleTextBook = new BaseComponent<HTMLParagraphElement>('p', ['section-title-textbook'], 'Учебник');
    backgroundTextbook.addChild(sectionTitleTextBook);
    this.sectionTitleTextBook = sectionTitleTextBook;

    const menuBookBtnWrap = new BaseComponent<HTMLDivElement>('div', ['menu-book-wrap_btn']);
    backgroundTextbook.addChild(menuBookBtnWrap);
    this.menuBookBtnWrap = menuBookBtnWrap;

    //  Group
    const groupWrap = new BaseComponent<HTMLDivElement>('div', ['group-wrap']);
    menuBookBtnWrap.addChild(groupWrap);
    this.groupWrap = groupWrap;

    this.getUseGroup(group);

    // Page
    const numPageBookWrap = new BaseComponent<HTMLDivElement>('div', ['num-page-wrap']);
    menuBookBtnWrap.addChild(numPageBookWrap);
    this.numPageBookWrap = numPageBookWrap;

    const numPageTextBook = new BaseComponent<HTMLParagraphElement>('p', ['num-page-book'], `Страница ${page + 1}`);
    this.numPageTextBook = numPageTextBook;

    const pastPageBookBtn = new ButtonComponent(['past-page-book_btn'], '<');
    numPageBookWrap.addChild(pastPageBookBtn);
    pastPageBookBtn.onClick(():void => {
      if (page > 0) {
        page--;
        localStorage.setItem('page', `${page}`);
        numPageTextBook.element.innerHTML = `Страница ${page + 1}`;
      }
      allWordsWrap.clearChildren();
      this.getInfoWords(group);
    });
    this.pastPageBookBtn = pastPageBookBtn;

    const nowPageBookBtn = new ButtonComponent(['now-page-book_btn']);
    numPageBookWrap.addChild(nowPageBookBtn);
    this.nowPageBookBtn = nowPageBookBtn;

    const pageImg = new ImgComponent(['page_img'], 'page.svg', 'page');
    nowPageBookBtn.addChild(pageImg);
    this.pageImg = pageImg;

    nowPageBookBtn.addChild(numPageTextBook);

    const nextPageBookBtn = new ButtonComponent(['next-page-book_btn'], '>');
    numPageBookWrap.addChild(nextPageBookBtn);
    nextPageBookBtn.onClick(():void => {
      if (page < 29) {
        page++;
        localStorage.setItem('page', `${page}`);
        numPageTextBook.element.innerHTML = `Страница ${page + 1}`;
      }
      allWordsWrap.clearChildren();
      this.getInfoWords(group);
    });
    this.nextPageBookBtn = nextPageBookBtn;

    // Game
    const gameBtnInTextbook = new ButtonComponent(['game-in-textbook_btn']);
    menuBookBtnWrap.addChild(gameBtnInTextbook);
    gameBtnInTextbook.onClick(():void => {
      this.addChild(this.game);
    });
    this.gameBtnInTextbook = gameBtnInTextbook;

    const gamepadInBtnGameImg = new ImgComponent(['folder-game-in-book_img'], 'listNav/gamepad.svg', 'game');
    gameBtnInTextbook.addChild(gamepadInBtnGameImg);
    this.gamepadInBtnGameImg = gamepadInBtnGameImg;

    const textGameInTextBook = new BaseComponent<HTMLParagraphElement>('p', ['text-game-book'], 'Игры');
    gameBtnInTextbook.addChild(textGameInTextBook);
    this.textGameInTextBook = textGameInTextBook;

    // Settings
    const settingsBtnInTextbook = new ButtonComponent(['settings-in-textbook_btn']);
    menuBookBtnWrap.addChild(settingsBtnInTextbook);
    settingsBtnInTextbook.onClick(():void => {
      this.settingsMenu();
    });
    this.settingsBtnInTextbook = settingsBtnInTextbook;

    const settingsInBtnGameImg = new ImgComponent(['settings-in-book_img'], 'settings.svg', 'settings');
    settingsBtnInTextbook.addChild(settingsInBtnGameImg);
    this.settingsInBtnGameImg = settingsInBtnGameImg;

    const settingsTextInTextBook = new BaseComponent<HTMLParagraphElement>('p', ['text-settings-book'], 'Настройки');
    settingsBtnInTextbook.addChild(settingsTextInTextBook);
    this.settingsTextInTextBook = settingsTextInTextBook;
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

    const closeFormImg = new ImgComponent(['close-form_img'], 'cross.svg', 'cross');
    closeFormBtn.addChild(closeFormImg);
    this.closeFormImg = closeFormImg;

    // First point
  }

  getAllGroup() {
    const allGroupWrap = new BaseComponent<HTMLDivElement>('div', ['all-group-wrap']);
    this.groupWrap.addChild(allGroupWrap);
    this.allGroupWrap = allGroupWrap;

    GROUP_COLOR_NUM.forEach((item, index) => {
      const numGroupUse = index;
      const changeGroupBtn = new ButtonComponent(['change-group_btn']);
      changeGroupBtn.element.style.backgroundColor = `${item.backColor}`;
      allGroupWrap.addChild(changeGroupBtn);
      changeGroupBtn.onClick(():void => {
        console.log(index, 'index');

        localStorage.setItem('group', `${index}`);
        this.groupWrap.clearChildren();
        this.allWordsWrap.clearChildren();
        this.getUseGroup(numGroupUse);
      });
      this.changeGroupBtn = changeGroupBtn;

      const folderChangeGroup = new ImgComponent(['folder-section_btn'], 'folder.svg', 'folder');
      changeGroupBtn.addChild(folderChangeGroup);
      this.folderChangeGroup = folderChangeGroup;

      const numSectionTextBookChange = new BaseComponent<HTMLParagraphElement>('p', ['num-section-change-book'], `${item.numGroup}`);
      changeGroupBtn.addChild(numSectionTextBookChange);
      this.numSectionTextBookChange = numSectionTextBookChange;
    });
  }

  getUseGroup(numUseGroup: number) {
    this.getInfoWords(numUseGroup);
    const sectionNumBookBtn = new ButtonComponent(['section-num-book_btn']);
    sectionNumBookBtn.element.style.backgroundColor = `${GROUP_COLOR_NUM[numUseGroup].backColor}`;
    this.groupWrap.addChild(sectionNumBookBtn);
    sectionNumBookBtn.onClick(():void => {
      this.getAllGroup();
    });
    this.sectionNumBookBtn = sectionNumBookBtn;

    const folderInBtnSectionImg = new ImgComponent(['folder-section_btn'], 'folder.svg', 'folder');
    sectionNumBookBtn.addChild(folderInBtnSectionImg);
    this.folderInBtnSectionImg = folderInBtnSectionImg;

    const numSectionTextBook = new BaseComponent<HTMLParagraphElement>('p', ['num-section-book'], `${GROUP_COLOR_NUM[numUseGroup].numGroup}`);
    sectionNumBookBtn.addChild(numSectionTextBook);
    this.numSectionTextBook = numSectionTextBook;
  }

  async getInfoWords(numUseGroup: number) {
    const words = await getWords(numUseGroup, page);
    words.forEach((item) => {
      const wordInBookWrap = new BaseComponent<HTMLDivElement>('div', ['word-in-book-wrap']);
      this.allWordsWrap.addChild(wordInBookWrap);
      this.wordInBookWrap = wordInBookWrap;

      const wordImg = new ImgComponent(['word_img'], `https://roling-task-rslang.herokuapp.com/${item.image}`, 'picture');
      wordInBookWrap.addChild(wordImg);
      this.wordImg = wordImg;

      const infoWordWrap = new BaseComponent<HTMLDivElement>('div', ['info-word-wrap']);
      wordInBookWrap.addChild(infoWordWrap);
      this.infoWordWrap = infoWordWrap;

      const wordAndTranscriptWrap = new BaseComponent<HTMLDivElement>('div', ['word-transcript-wrap']);
      infoWordWrap.addChild(wordAndTranscriptWrap);
      this.wordAndTranscriptWrap = wordAndTranscriptWrap;

      const pointWordImg = new BaseComponent<HTMLDivElement>('div', ['point-word_img']);
      pointWordImg.element.style.backgroundColor = `${GROUP_COLOR_NUM[numUseGroup].backColor}`;
      wordAndTranscriptWrap.addChild(pointWordImg);
      this.pointWordImg = pointWordImg;

      const enWordTranscript = new BaseComponent<HTMLSpanElement>('p', ['en-word-transcription'], `${item.word} - ${item.transcription}`);
      wordAndTranscriptWrap.addChild(enWordTranscript);
      this.enWordTranscript = enWordTranscript;

      let flag = true;

      const audioImg = new ImgComponent(['audio_img'], 'audio/play.svg', 'play');
      this.audioImg = audioImg;

      const audioBtn = new ButtonComponent(['audio_btn']);
      wordAndTranscriptWrap.addChild(audioBtn);
      audioBtn.onClick(() => {
        if (flag) {
          audioImg.element.src = 'audio/pause.svg';
          flag = false;
        } else {
          audioImg.element.src = 'audio/play.svg';
          flag = true;
        }
      });
      this.audioBtn = audioBtn;

      audioBtn.addChild(audioImg);

      const translateWord = new BaseComponent<HTMLParagraphElement>('p', ['translate-word'], `${item.wordTranslate}`);
      infoWordWrap.addChild(translateWord);
      this.translateWord = translateWord;

      const enTextMeaning = new BaseComponent<HTMLParagraphElement>('p', ['en-text'], `${item.textMeaning}`);
      infoWordWrap.addChild(enTextMeaning);
      this.enTextMeaning = enTextMeaning;

      const enTextMeaningTranslate = new BaseComponent<HTMLParagraphElement>('p', ['en-text-translate'], `${item.textMeaningTranslate}`);
      infoWordWrap.addChild(enTextMeaningTranslate);
      this.enTextMeaningTranslate = enTextMeaningTranslate;

      const enTextExample = new BaseComponent<HTMLParagraphElement>('p', ['en-text'], `${item.textExample}`);
      infoWordWrap.addChild(enTextExample);
      this.enTextExample = enTextExample;

      const enTextExampleTranslate = new BaseComponent<HTMLParagraphElement>('p', ['en-text-translate'], `${item.textExampleTranslate}`);
      infoWordWrap.addChild(enTextExampleTranslate);
      this.enTextExampleTranslate = enTextExampleTranslate;
    });
  }
}
