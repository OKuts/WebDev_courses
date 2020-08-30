//1
let test = new Test();
test.prop = 'Mao';
console.log(test.prop);

// 2
const test2 = new Test2();
console.log(test2.testProp = 'bbb');
console.log(test2);

console.log(test2.testProp = '');
console.log(test2);

console.log(test2.setTestProp(''));
console.log(test2);

//3
console.log(test2.testProp);

//4
let test3 = new Test3();
console.log(test3.testProp = 9);
console.log(test3.testProp);

//5
let test4 = new Test4();
test4.testProp = 8;
console.log(test4);
//6
console.log(test4.testValue = 101);
console.log(test4.gettestValue());


