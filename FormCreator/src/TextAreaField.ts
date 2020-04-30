import { Field } from "./Field";

export class TextAreaField implements Field {
    name: string;
    area: HTMLElement;
    element: HTMLTextAreaElement;
    constructor(name: string) {
        this.area = <HTMLElement>document.createElement('p');
        this.element = <HTMLTextAreaElement>document.createElement('textarea');
        this.element.rows = 4;
        this.element.cols = 40;
        this.area.appendChild(document.createTextNode(name));
        this.area.appendChild(this.element);
        this.name = name;
        this.element.name = this.name;
    }
    render(): HTMLElement {
        return this.area;
    }
    getValue(): any {
        return this.element.name + this.element.value;
    }
}
