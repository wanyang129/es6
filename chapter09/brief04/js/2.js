/**
 * es6一共有5中方法可以遍历对象的属性
 *  for...in循环
 *  Object.keys(obj)
 *  Object.getOwnPropertyNames(obj)
 *  Object.getOwnPropertySymbols(obj)
 *  Reflect.ownKeys(obj)
 */
console.log(Reflect.ownKeys({ [Symbol()]: 0, b: 0, 10: 0, 2: 0, a: 0 }));