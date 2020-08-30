class Man {
    constructor(name, age, passport, sex) {
        this._name = name;
        this.age = age;
        this.passport = passport;
        this.sex = sex
    }
    render(place, out) {
        let div = document.createElement('div');
        div.classList.add(out);
        div.innerHTML = `<p>${this._name}</p><p>${this.age}</p><p>${this.passport}</p><p>${this.sex}</p>`
        document.querySelector(place).append(div);
    }
}