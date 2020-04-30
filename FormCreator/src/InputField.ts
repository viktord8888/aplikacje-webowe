import { Field } from "./Field";

export class InputField implements Field {
    name: string;
    area: HTMLElement;
    element: HTMLInputElement;
    constructor(name: string) {
        this.area = <HTMLElement>document.createElement('p');
        this.element = <HTMLInputElement>document.createElement('input');
        this.area.appendChild(document.createTextNode(name));
        this.area.appendChild(this.element);
        this.name = name;
        this.element.name = this.name;
        this.element.type = 'textBox';
    }
    render(): HTMLElement {
        return this.area;
    }
    getValue(): any {
        return this.element.name + this.element.value;
    }
}
