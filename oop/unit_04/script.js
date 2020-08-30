const arr = ['one', 'two', 'three', 'four'];
const arrClass = ['text-center', 'bold', 'text-red'];
const list = new List(arr);
document.querySelector('body').prepend(list.render());
const list2 = new List2(arr, 'red');
console.log(list2.render());
document.querySelector('ul').after(list2.render());
const list3 = new List3(arr, arrClass);
document.querySelector('.red').after(list3.render());