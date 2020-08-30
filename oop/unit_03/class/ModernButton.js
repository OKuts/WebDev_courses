class ModernButton extends Button {
    constructor(width, heigth, background, value, borderRadius) {
        super(width, heigth, background, value);
        this.borderRadius = borderRadius || 0;
    }
    render() {
        let btn = super.render();
        btn.style.borderRadius = this.borderRadius + 'px'
        return btn;
    }
}