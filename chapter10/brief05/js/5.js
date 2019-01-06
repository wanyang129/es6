// Object.values只返回对象自身的可遍历属性
const obj = Object.create({}, { p: { value: 42 } });
console.log(Object.values(obj));