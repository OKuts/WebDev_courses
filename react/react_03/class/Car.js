class Car {
    constructor(brand, name, weight, fuel_type, color, img) {
        this.brand = brand;
        this.name = name;
        this.weight = weight;
        this.fuel_type = fuel_type;
        this.color = color;
        this.img = img
    }
    render(place) {
        let tr, td;
        let table = document.createElement('table');
        for (const key in this) {
            tr = document.createElement('tr');
            tr.innerHTML = key === 'img'
                ? `<td>${key}</td><td><img src="${this[key]}"></td>`
                : `<td>${key}</td><td>${this[key]}</td>`;
            table.append(tr);
        }
        document.querySelector(place).append(table);
    }
}