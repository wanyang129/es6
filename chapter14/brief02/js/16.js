// Reflect.ownKeys方法用于返回对象的所有属性,基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和.
var myObject = {
  foo: 1,
  bar: 2,
  [Symbol.for('baz')]: 3,
  [Symbol.for('bing')]: 4
};
console.log(Object.getOwnPropertyNames(myObject));
console.log(Object.getOwnPropertySymbols(myObject));
console.log(Reflect.ownKeys(myObject));