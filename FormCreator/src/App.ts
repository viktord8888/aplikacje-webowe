import { Form } from "./Form";

export class App {
    form: Form;
    constructor(form: Form) {
        this.form = form;
    }
    createForm(): void {
        this.form.render();
    }
}
