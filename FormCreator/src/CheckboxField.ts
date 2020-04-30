import { Field } from "./Field";

export class CheckboxField implements Field {
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
        this.element.type = 'checkbox';
    }
    render(): HTMLElement {
        return this.area;
    }

    renderTable(): HTMLElement {
        let table = document.createElement('td');
        
        return table;
    }

    getValue(): any {
        if (this.element.checked)
            return this.element.name + "TAK";
        else
            return this.element.name + "NIE";
    }
}
