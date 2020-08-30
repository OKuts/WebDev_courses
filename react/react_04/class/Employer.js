class Employer extends Man {
    constructor(name, age, passport, sex, create, salary) {
        super(name, age, passport, sex);
        this.create = create;
        this.salary = salary;
    }
    render(place, out) {
        super.render(place, out);
        document.querySelector(`.${out}`).innerHTML += `<p>${this.create}</p><p>${this.salary}</p>`
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}