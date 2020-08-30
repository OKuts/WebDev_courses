class Goods2 extends Goods {
    constructor(name, amount, image, count, sale) {
        super(name, amount, image, count);
        this.sale = sale;
    }
    draw(block) {
        document.querySelector(block).innerHTML += `<img src=${this.image}>${this.name} ${this.amount} ${this.sale}`;
    }
}