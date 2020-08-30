class List {
    constructor(item) {
        this.item = item;
    }

    render() {
        let li;
        let ul = document.createElement('ul');
        this.item.forEach(el => {
            li = document.createElement('li');
            li.textContent = el;
            ul.append(li);
        });
        return ul;
    }
}