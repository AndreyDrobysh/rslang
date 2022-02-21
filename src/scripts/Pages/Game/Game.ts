import BaseComponent from '../../components/BaseComponent/BaseComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import './game.css';

export default class Game extends BaseComponent {
  gameBtnWrap: BaseComponent<HTMLDivElement>;

  gameAudioBtn: BaseComponent;

  gameSprintBtn: BaseComponent;

  constructor() {
    super('div', ['back-game']);

    const gameBtnWrap = new BaseComponent<HTMLDivElement>('div', ['game-wrap']);
    this.addChild(gameBtnWrap);
    this.gameBtnWrap = gameBtnWrap;

    const gameAudioBtn = new ButtonComponent(['game-audio_btn'], 'аудиовызов');
    gameBtnWrap.addChild(gameAudioBtn);
    this.gameAudioBtn = gameAudioBtn;

    const gameSprintBtn = new ButtonComponent(['game-sprint-Btn'], 'Спринт');
    gameBtnWrap.addChild(gameSprintBtn);
    this.gameSprintBtn = gameSprintBtn;
  }
}
