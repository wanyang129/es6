/**
 * ownKeys方法用来拦截对象自身属性的读取操作.具体来说,拦截一下操作
 *  Object.getOwnPropertyNames()
 *  Object.getOwnPropertySymbols() 
 *  Object.keys()
 *  for...in循环
 */
let target = {
  a: 1,
  b: 2,
  c: 3
};
let handler = {
  ownKeys(target) {
    return ['a'];
  }
};

let proxy = new Proxy(target, handler);
console.log(Object.keys(proxy));