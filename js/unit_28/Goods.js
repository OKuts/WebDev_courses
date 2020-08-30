class Goods {
    constructor(name, amount, image, count) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
    }
    draw(block) {
        document.querySelector(block).innerHTML += `<img src=${this.image}>${this.name} ${this.amount}`;
    }
}