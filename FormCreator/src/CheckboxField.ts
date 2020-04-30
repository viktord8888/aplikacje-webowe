import { Field } from "./Field";

export class CheckboxField implements Field {
    name: string;
    area: HTMLElement;
    element: HTMLInputElement;
    table: HTMLElement;
    constructor(name: string) {
        this.area = <HTMLElement>document.createElement('p');
        this.element = <HTMLInputElement>document.createElement('input');
        this.area.appendChild(document.createTextNode(name));
        this.area.appendChild(this.element);
        this.table = <HTMLElement>document.createElement('th');
        this.table.appendChild(document.createTextNode(this.getValue()));
        this.table.appendChild(this.element);
        this.name = name;
        this.element.name = this.name;
        this.element.type = 'checkbox';
    }
    render(): HTMLElement {
        return this.area;
    }
    getValue(): any {
        if (this.element.checked)
            return this.element.name + "TAK";
        else
            return this.element.name + "NIE";
    }
}
