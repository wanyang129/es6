// 如果目标对象与源对象有同名属性,或多个源对象有同名属性,则后面的属性会覆盖前面的属性
const target = { a: 1, b: 1 };
const source1 = { b: 2, c: 2 };
const source2 = { c: 3 };
Object.assign(target, source1, source2);
console.log(target);
// 如果只有一个参数,Object.assign会直接返回该参数
const obj = { a: 1 };
console.log(Object.assign(obj) === obj);
