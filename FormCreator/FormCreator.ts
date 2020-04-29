enum FieldType {
    textBox,
    date,
    email,
    checkbox
}

interface Field {
    name: string;
    area: HTMLElement;
    render(): HTMLElement;
    getValue(): any;
}

class InputField implements Field {
    name: string;
    type: FieldType;
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

class TextAreaField implements Field {
    name: string;
    area: HTMLElement;
    cols: number;
    rows: number;
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

class DateField implements Field {
    name: string;
    type: FieldType;
    area: HTMLElement;
    element: HTMLInputElement;

    constructor(name: string) {
        this.area = <HTMLElement>document.createElement('p');
        this.element = <HTMLInputElement>document.createElement('input');
        this.area.appendChild(document.createTextNode(name));
        this.area.appendChild(this.element)
        this.name = name;
        this.element.name = this.name;
        this.element.type = 'date';
    }

    render(): HTMLElement {
        return this.area;
    }

    getValue(): any {
        return this.element.name + this.element.value;
    }
}

class EmailField implements Field {
    name: string;
    type: FieldType;
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
        return this.area;
    }

    getValue(): any {
        return this.element.name + this.element.value;
    }
}

class SelectField implements Field {
    name: string;
    area: HTMLElement;
    option1: HTMLOptionElement;
    option2: HTMLOptionElement;
    option3: HTMLOptionElement;
    option4: HTMLOptionElement;
    option1Name: string;
    option2Name: string;
    option3Name: string;
    option4Name: string;
    element: HTMLSelectElement;

    constructor(name: string, option1Name: string, option2Name: string, option3Name: string, option4Name: string) {
        this.area = <HTMLElement>document.createElement('p');
        this.element = <HTMLSelectElement>document.createElement('select');
        this.area.appendChild(document.createTextNode(name));
        this.area.appendChild(this.element)     
        this.option1 = <HTMLOptionElement>document.createElement('option');
        this.option2 = <HTMLOptionElement>document.createElement('option');
        this.option3 = <HTMLOptionElement>document.createElement('option');
        this.option4 = <HTMLOptionElement>document.createElement('option');
        this.option1.appendChild(document.createTextNode(option1Name));
        this.option2.appendChild(document.createTextNode(option2Name));
        this.option3.appendChild(document.createTextNode(option3Name));
        this.option4.appendChild(document.createTextNode(option4Name));
        this.element.appendChild(this.option1);
        this.element.appendChild(this.option2);
        this.element.appendChild(this.option3);
        this.element.appendChild(this.option4);
        this.option1Name = option1Name;
        this.option2Name = option2Name;
        this.option3Name = option3Name;
        this.option4Name = option4Name;
        this.option1.value = this.option1Name;
        this.option2.value = this.option2Name;
        this.option3.value = this.option3Name;
        this.option4.value = this.option4Name;
        this.name = name;
        this.element.name = this.name;
    }

    render(): HTMLElement {
        return this.area;
    }

    getValue(): any {
        if (this.element.value === this.option1.value)
            return this.element.name + "Informatyka i Ekonometria";
        else if(this.element.value === this.option2.value)
            return this.element.name + "Finanse i Rachunkowość";
        else if(this.element.value === this.option3.value)
            return this.element.name + "Zarządzanie";
        else if(this.element.value === this.option4.value)
            return this.element.name + "Inny";
        else
            return this.element.name + "Nie wybrano";
    }
}

class CheckboxField implements Field {
    name: string;
    type: FieldType;
    area: HTMLElement;
    element: HTMLInputElement;

    constructor(name: string) {
        this.area = <HTMLElement>document.createElement('p');
        this.element = <HTMLInputElement>document.createElement('input');
        this.area.appendChild(document.createTextNode(name));
        this.area.appendChild(this.element)
        this.name = name;
        this.element.name = this.name;
        this.element.type = 'checkbox';
    }

    render(): HTMLElement {
        return this.area;
    }

    getValue(): any {
        if (this.element.checked)
            return this.element.name + "TAK"
        else
            return this.element.name + "NIE"
    }
}

class Form {
    fields: Field[];
    formElement: HTMLElement;

    constructor(id: string) {
        this.fields = new Array();
        this.formElement = document.getElementById(id);
    }

    render(): void {
        this.fields.forEach(element => {
            this.formElement.appendChild(element.render());
        });
    }

    addField(field: Field): void {
        this.fields.push(field);
    }

    getValue(): void {
        this.fields.forEach(element => {
            console.log(element.getValue());
        });
    }
}

class App {
    form: Form;

    constructor(form: Form) {
       this.form = form;
    }

    createForm(): void {
        this.form.render();
    }
}

let form = new Form('form');
form.addField(new InputField("Imię: "));
form.addField(new InputField("Nazwisko: "));
form.addField(new EmailField("E-mail: "));
form.addField(new DateField("Data urodzenia: "));
form.addField(new SelectField("Wybrany kierunek studiów: ", "Informatyka i Ekonometria", "Finanse i Rachunkowość", "Zarządzanie", "Inny"));
form.addField(new CheckboxField("Czy preferujesz e-learning: "));
form.addField(new TextAreaField("Uwagi: "));

let app = new App(form);
app.createForm();

let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', ()=>form.getValue(), false);
