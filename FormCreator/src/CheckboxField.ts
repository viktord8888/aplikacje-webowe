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

    getValue(): any {
        let table: HTMLTableElement = <HTMLTableElement> document.getElementById('table');
        let element: HTMLElement = <HTMLElement> document.createElement('tr');
        let elementName: HTMLElement = <HTMLElement> document.createElement('th');
        let elementValue: HTMLElement = <HTMLElement> document.createElement('td');

        elementName.innerHTML = this.element.name;
        
        if(this.element.checked)
            elementValue.innerHTML = "TAK";
        else
            elementValue.innerHTML = "NIE"

        table.appendChild(element)
        element.appendChild(elementName);
        element.appendChild(elementValue);

        let deleteButton: HTMLElement = <HTMLElement> document.createElement('button');
        deleteButton.innerHTML = "X";
        deleteButton.addEventListener('click', ()=> elementValue.innerHTML = "");

        element.appendChild(deleteButton);

        if(this.element.checked)
            localStorage.setItem(this.element.name, "TAK");
        else
            localStorage.setItem(this.element.name, "NIE");

        JSON.stringify(localStorage);

        if (this.element.checked)
            return this.element.name + "TAK";
        else
            return this.element.name + "NIE";
    }
}
