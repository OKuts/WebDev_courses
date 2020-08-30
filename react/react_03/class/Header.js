class Header {
    constructor(h1, h2, h3, img, contacts) {
        this.h1 = h1;
        this.h2 = h2;
        this.h3 = h3;
        this.img = img;
        this.contacts = contacts
    }
    render(place) {
        let buff, li;
        let header = document.createElement('header');
        for (const teg in this) {
            buff = document.createElement(teg);
            switch (teg) {
                case 'h1':
                case 'h2':
                case 'h3': buff.textContent = this[teg];
                    break;
                case 'img': buff.src = this[teg];
                    break;
                case 'contacts': {
                    buff = document.createElement('ul');
                    this[teg].forEach(el => {
                        li = document.createElement('li');
                        li.textContent = el;
                        buff.append(li);
                    });
                };
                    break;
            }
            header.append(buff);
        }
        document.querySelector(place).insertBefore(header, document.querySelector(place).firstChild);
    }
}