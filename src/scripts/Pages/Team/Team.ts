import BaseComponent from '../../components/BaseComponent/BaseComponent';
import ImgComponent from '../../components/ImgComponent/ImgComponent';
import LinkComponent from '../../components/LinkComponent/LinkComponent';
import './team.css';

export default class Team extends BaseComponent {
  allInfo: BaseComponent<HTMLDivElement>;

  myProfileWrap: BaseComponent<HTMLDivElement>;

  myFace: ImgComponent;

  infoAboutMe: BaseComponent<HTMLDivElement>;

  namePage: BaseComponent<HTMLParagraphElement>;

  myName: BaseComponent<HTMLParagraphElement>;

  githubLink: LinkComponent;

  githubLinkWrap: BaseComponent<HTMLDivElement>;

  githubImg: ImgComponent;

  comment: BaseComponent<HTMLParagraphElement>;

  constructor() {
    super('div', ['team-back']);

    const allInfo = new BaseComponent<HTMLDivElement>('div', ['all-info']);
    this.addChild(allInfo);
    this.allInfo = allInfo;

    const namePage = new BaseComponent<HTMLParagraphElement>('p', ['name-page'], 'Разработчики');
    allInfo.addChild(namePage);
    this.namePage = namePage;

    const myProfileWrap = new BaseComponent<HTMLDivElement>('div', ['profile-wrap']);
    allInfo.addChild(myProfileWrap);
    this.myProfileWrap = myProfileWrap;

    const myFace = new ImgComponent(['my-face'], 'myface.jpg', 'avatar');
    myProfileWrap.addChild(myFace);
    this.myFace = myFace;

    const infoAboutMe = new BaseComponent<HTMLDivElement>('div', ['info-about-me']);
    myProfileWrap.addChild(infoAboutMe);
    this.infoAboutMe = infoAboutMe;

    const myName = new BaseComponent<HTMLParagraphElement>('p', ['name'], 'Андрей Дробыш');
    infoAboutMe.addChild(myName);
    this.myName = myName;

    const githubLinkWrap = new BaseComponent<HTMLDivElement>('div', ['github-wrap']);
    infoAboutMe.addChild(githubLinkWrap);
    this.githubLinkWrap = githubLinkWrap;

    const githubImg = new ImgComponent(['github-img'], 'github.svg', 'avatar');
    githubLinkWrap.addChild(githubImg);
    this.githubImg = githubImg;

    const githubLink = new LinkComponent(['github-link'], 'https://github.com/AndreyDrobysh', 'AndreyDrobysh');
    githubLinkWrap.addChild(githubLink);
    this.githubLink = githubLink;

    const comment = new BaseComponent<HTMLParagraphElement>('p', ['comment'], 'Не смог найти команду, пришлось делать самому, из-за нехватки времени не успел(');
    infoAboutMe.addChild(comment);
    this.comment = comment;
  }
}
