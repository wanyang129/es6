// 如果一个对象本身部署了__proto__属性,该属性的值就是对象的原型.
console.log(Object.getPrototypeOf({ __proto__: null }));