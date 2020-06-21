import { Field } from "./Field";

export class ExtendedSelectField implements Field {
    name: string;
    area: HTMLElement;
    element: HTMLSelectElement;
    constructor(name: string, optionName: string[]) {
        this.area = <HTMLElement>document.createElement('p');
        this.element = <HTMLSelectElement>document.createElement('select');
        this.area.appendChild(document.createTextNode(name));
        this.area.appendChild(this.element);
        this.name = name;
        this.element.name = this.name;
        this.fetchOptions<{name: string}>("https://restcountries.eu/rest/v2/all").then((data) => {
            data.map(x=>x.name).forEach(element => {
                let option = <HTMLOptionElement>document.createElement("option");
                option.text = element;
                option.value = element;
                this.element.options.add(option);
            })
        });
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

    fetchOptions<T>(url: string): Promise<T[]> {
        return fetch(url)
        .then(res => res.json())
        .then(res => { 
            return res;
        })
        .catch((e) => {
          console.log("API errore fetching ");
        });
    }
}
