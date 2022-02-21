import BaseComponent from '../BaseComponent/BaseComponent';

export default class LinkComponent extends BaseComponent<HTMLLinkElement> {
  constructor(classes:string [] = [], href = '', text?: string) {
    super('a', classes);
    if (text) {
      this.element.innerHTML = text;
    }
    this.element.href = href;
  }
}
