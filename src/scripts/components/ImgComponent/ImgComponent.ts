import BaseComponent from "../BaseComponent/BaseComponent";

export default class ImgComponent extends BaseComponent<HTMLImageElement>{
  constructor(classes:string [] = [], src = '', alt = '', text?: string) {
    super('img', classes);
    if (text) {
      this.element.innerHTML = text;
    }
    this.element.src = src;
    this.element.alt = alt;
  }
}