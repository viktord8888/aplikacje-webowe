import { Field } from "./Field";

export class EmailField implements Field {
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
        this.element.type = 'email';
    }

    render(): HTMLElement {
        return this.createTable() && this.area;
    }

    createTable() {
        let table: HTMLTableElement = <HTMLTableElement> document.getElementById('table');
        let elementName: HTMLElement = <HTMLElement> document.createElement('th');
        elementName.setAttribute('id', 'elementName');

        elementName.innerHTML = this.element.name;

        table.appendChild(elementName);

        return table;
    }

    getValue(): any {
        let table: HTMLTableElement = <HTMLTableElement> document.getElementById('table');
        let base: HTMLElement = <HTMLElement> document.createElement('tr');
        let elementName: HTMLElement = <HTMLElement> document.getElementById('elementName');
        let elementValue: HTMLElement = <HTMLElement> document.createElement('td');
        
        table.appendChild(elementName);
        elementName.appendChild(base);
        base.appendChild(elementValue);

        elementValue.innerHTML = this.element.value;

        return this.element.name + this.element.value;
    }
}
