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
