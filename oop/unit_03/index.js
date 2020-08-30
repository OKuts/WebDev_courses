let btn = new Button(100, 70, 'red', 'Button');
document.querySelector('body').appendChild(btn.render());

let btn1 = new ModernButton(200, 40, 'green', 'ModernButton');
document.querySelector('body').appendChild(btn1.render());

let btn2 = new ModernButton(200, 40, 'blue', 'ModernButton', 20);
document.querySelector('body').appendChild(btn2.render());
