let car = {
    model: 'ZAZ',
    weight: 500,
    color: 'green',
    mileage: 100000,
    go: function () {
        console.log(`go ${this.model}`)
    }
}

let ford = {
    year: 2020,
    go: function () {
        console.log(`${this.year} ${this.color}`)
    }
}
let chevrolet = {
    body_style: 'sedan',
    drive_type: 'cross',
    go: function () {
        console.log(`${this.weight}`)
    }
};


car.go();
console.log(ford);
ford.__proto__ = car;
console.log(ford);
ford.model = 'FORD';
ford.weight = 1000;
ford.color = 'red';
ford.go();
ford.__proto__.go();
chevrolet.__proto__ = ford;
console.log(chevrolet.model, chevrolet.color, chevrolet.mileage);
chevrolet.go();
for (let i in chevrolet) {
    console.log(chevrolet[i]);
}