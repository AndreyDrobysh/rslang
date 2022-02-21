import BaseComponent from '../BaseComponent/BaseComponent';

export default class ButtonComponent extends BaseComponent<HTMLButtonElement> {
  constructor(classes:string [] = [], text?: string) {
    super('button', classes);
    if (text) {
      this.element.innerHTML = text;
    }
  }

  onClick(cb: (e?:Event) => void) {
    this.element.addEventListener('click', cb);
  }
}
