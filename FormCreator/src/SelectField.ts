import { Field } from "./Field";

export class SelectField implements Field {
    name: string;
    area: HTMLElement;
    element: HTMLSelectElement;
    constructor(name: string, optionName: string[]) {
        this.area = <HTMLElement>document.createElement('p');
        this.element = <HTMLSelectElement>document.createElement('select');
        this.area.appendChild(document.createTextNode(name));
        this.area.appendChild(this.element);
        for (let i = 0; i < optionName.length; i++) {
            let option = <HTMLOptionElement>document.createElement('option');
            option.appendChild(document.createTextNode(optionName[i]));
            option.value = optionName[i];
            this.element.appendChild(option);
        }
        this.name = name;
        this.element.name = this.name;
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
        elementValue.innerHTML = this.element.value;

        table.appendChild(element)
        element.appendChild(elementName);
        element.appendChild(elementValue);

        let deleteButton: HTMLElement = <HTMLElement> document.createElement('button');
        deleteButton.innerHTML = "X";
        deleteButton.addEventListener('click', ()=> elementValue.innerHTML = "");

        element.appendChild(deleteButton);

        localStorage.setItem(this.element.name, this.element.value);
        JSON.stringify(localStorage);
        
        return this.element.name + this.element.value;
    }
}
