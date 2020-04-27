var FieldType;
(function (FieldType) {
    FieldType[FieldType["textBox"] = 0] = "textBox";
    FieldType[FieldType["textArea"] = 1] = "textArea";
    FieldType[FieldType["date"] = 2] = "date";
    FieldType[FieldType["email"] = 3] = "email";
    FieldType[FieldType["select"] = 4] = "select";
    FieldType[FieldType["checkbox"] = 5] = "checkbox";
})(FieldType || (FieldType = {}));
var InputField = /** @class */ (function () {
    function InputField(name) {
        this.area = document.createElement('div');
        this.element = document.createElement('input');
        this.area.appendChild(document.createTextNode(name));
        this.area.appendChild(this.element);
        this.name = name;
        this.element.name = this.name;
        this.element.type = 'textBox';
    }
    InputField.prototype.render = function () {
        return this.area;
    };
    InputField.prototype.getValue = function () {
        return this.element.name + this.element.value;
    };
    return InputField;
}());
var TextAreaField = /** @class */ (function () {
    function TextAreaField(name) {
        this.area = document.createElement('div');
        this.element = document.createElement('textarea');
        this.element.rows = 3;
        this.element.cols = 40;
        this.area.appendChild(document.createTextNode(name));
        this.area.appendChild(this.element);
        this.name = name;
        this.element.name = this.name;
    }
    TextAreaField.prototype.render = function () {
        return this.area;
    };
    TextAreaField.prototype.getValue = function () {
        return this.element.name + this.element.value;
    };
    return TextAreaField;
}());
var DateField = /** @class */ (function () {
    function DateField(name) {
        this.area = document.createElement('div');
        this.element = document.createElement('input');
        this.area.appendChild(document.createTextNode(name));
        this.area.appendChild(this.element);
        this.name = name;
        this.element.name = this.name;
        this.element.type = 'date';
    }
    DateField.prototype.render = function () {
        return this.area;
    };
    DateField.prototype.getValue = function () {
        return this.element.name + this.element.value;
    };
    return DateField;
}());
var EmailField = /** @class */ (function () {
    function EmailField(name) {
        this.area = document.createElement('div');
        this.element = document.createElement('input');
        this.area.appendChild(document.createTextNode(name));
        this.area.appendChild(this.element);
        this.name = name;
        this.element.name = this.name;
        this.element.type = 'email';
    }
    EmailField.prototype.render = function () {
        return this.area;
    };
    EmailField.prototype.getValue = function () {
        return this.element.name + this.element.value;
    };
    return EmailField;
}());
var SelectField = /** @class */ (function () {
    function SelectField(name) {
        this.area = document.createElement('div');
        this.element = document.createElement('select');
        this.area.appendChild(document.createTextNode(name));
        this.area.appendChild(this.element);
        this.option1 = document.createElement('option');
        this.option2 = document.createElement('option');
        this.option3 = document.createElement('option');
        this.option4 = document.createElement('option');
        this.option1.appendChild(document.createTextNode("Informatyka i Ekonometria"));
        this.option2.appendChild(document.createTextNode("Finanse i Rachunkowość"));
        this.option3.appendChild(document.createTextNode("Zarządzanie"));
        this.option4.appendChild(document.createTextNode("Inny"));
        this.option1.value = "Informatyka i Ekonometria";
        this.option2.value = "Finanse i Rachunkowość";
        this.option3.value = "Zarządzanie";
        this.option4.value = "Inny";
        this.element.appendChild(this.option1);
        this.element.appendChild(this.option2);
        this.element.appendChild(this.option3);
        this.element.appendChild(this.option4);
        this.name = name;
        this.element.name = this.name;
    }
    SelectField.prototype.render = function () {
        return this.area;
    };
    SelectField.prototype.getValue = function () {
        if (this.element.value === this.option1.value) {
            return this.element.name + "Informatyka i Ekonometria";
        }
        else if (this.element.value === this.option2.value) {
            return this.element.name + "Finanse i Rachunkowość";
        }
        else if (this.element.value === this.option3.value) {
            return this.element.name + "Zarządzanie";
        }
        else if (this.element.value === this.option4.value) {
            return this.element.name + "Inny";
        }
        else {
            return this.element.name + "Nie wybrano";
        }
    };
    return SelectField;
}());
var CheckboxField = /** @class */ (function () {
    function CheckboxField(name) {
        this.area = document.createElement('p');
        this.element = document.createElement('input');
        this.area.appendChild(document.createTextNode(name));
        this.area.appendChild(this.element);
        this.name = name;
        this.element.name = this.name;
        this.element.type = 'checkbox';
    }
    CheckboxField.prototype.render = function () {
        return this.area;
    };
    CheckboxField.prototype.getValue = function () {
        if (this.element.checked) {
            return this.element.name + "TAK";
        }
        else {
            return this.element.name + "NIE";
        }
    };
    return CheckboxField;
}());
var Form = /** @class */ (function () {
    function Form(id) {
        this.fields = new Array();
        this.formElement = document.getElementById(id);
    }
    Form.prototype.render = function () {
        var _this = this;
        this.fields.forEach(function (element) {
            _this.formElement.appendChild(element.render());
        });
    };
    Form.prototype.addField = function (field) {
        this.fields.push(field);
    };
    Form.prototype.getValue = function () {
        this.fields.forEach(function (element) {
            console.log(element.getValue());
        });
    };
    return Form;
}());
var App = /** @class */ (function () {
    function App(form) {
        this.form = form;
    }
    App.prototype.createForm = function () {
        this.form.render();
    };
    return App;
}());
var form = new Form('form');
form.addField(new InputField("Imię: "));
form.addField(new InputField("Nazwisko: "));
form.addField(new EmailField("E-mail: "));
form.addField(new DateField("Data: "));
form.addField(new SelectField("Wybrany kierunek studiów: "));
form.addField(new CheckboxField("Czy preferujesz e-learning: "));
form.addField(new TextAreaField("Uwagi: "));
var app = new App(form);
app.createForm();
var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function () { return form.getValue(); }, false);
