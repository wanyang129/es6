// Object.getOwnPropertySymbols方法,可以获取指定对象的所有Symbol属性名
// const obj = {};
// let a = Symbol('a');
// let b = Symbol('b');
// obj[a] = 'Hello';
// obj[b] = 'World';
// const objectSymbols = Object.getOwnPropertySymbols(obj);
// console.log(objectSymbols);

const obj = {};
let a = Symbol();
let b = Symbol();
obj[a] = 'Hello';
obj[b] = 'World';
const objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);