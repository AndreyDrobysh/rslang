export default class BaseComponent<T extends HTMLElement = HTMLElement> {
  readonly element: T;

  constructor(
    tag: keyof HTMLElementTagNameMap,
    classes: string[] = [],
    text?: string,
  ) {
    this.element = document.createElement(tag) as T;
    this.element.classList.add(...classes);
    if (text) {
      this.element.innerText = text;
    }
  }

  addChild(child: BaseComponent): this {
    this.element.appendChild(child.element);
    return this;
  }

  clearChildren(): void {
    this.element.innerHTML = '';
  }

  start?(): void;
}
