import { Form } from './Form';
import { InputField } from './InputField';
import { EmailField } from './EmailField';
import { DateField } from './DateField';
import { SelectField } from './SelectField';
import { CheckboxField } from './CheckboxField';
import { TextAreaField } from './TextAreaField';
import { ExtendedSelectField } from './ExtendedSelectField';

import './styles/styles.scss';

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
form.addField(new ExtendedSelectField("Kraj pochodzenia: ", ['https://restcountries.eu/rest/v2/all']))
form.addField(new SelectField("Wybrany kierunek studiów: ", ["Informatyka i Ekonometria", "Finanse i Rachunkowość", "Zarządzanie", "Inny"]));
form.addField(new CheckboxField("Czy preferujesz e-learning: "));
form.addField(new TextAreaField("Uwagi: "));

let app = new App(form);
app.createForm();

let submitButton = <HTMLElement>document.getElementById('submit');
submitButton.addEventListener('click', ()=>form.getValue(), false);