const ivan = new Man('Ivan', 180, 100, 33, 'm', 'TT456789', 'brown');
const car = new Car('ZAZ', 'Lastochka', 1000, 'diesel', 'red', 'images/zaz.jpg');
const header = new Header('Back End', 'Study Node.js', 'Node.js is Back End', 'images/node.png', ['044-222-22-22', '+380509999999', 'fff@gmail.com']);
const car1 = new Car('VAZ', 'Oka', 500, 'A-92', 'blue', 'images/vaz.jpg');
const car2 = new Car('BMW', 'Q8', 2000, 'diesel', 'orange', 'images/bmw.jpg');

console.log(ivan);
console.log(car);
car.render('body');
header.render('body');
car1.render('body');
car2.render('body');