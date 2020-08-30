class Button {
    constructor(width, heigth, background, value) {
        this.width = width;
        this.height = heigth;
        this.background = background;
        this.value = value;
    }

    render() {
        let btn = document.createElement('button');
        btn.style.width = this.width + 'px';
        btn.style.height = this.height + 'px';
        btn.style.background = this.background;
        btn.value = this.value;
        btn.textContent = this.value;
        return btn;
    }
}

