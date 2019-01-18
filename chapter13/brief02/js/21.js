/**
 * getPrototypeOf方法主要用来拦截获取对象原型.具体来说,拦截下面这些操作.
 *  Object.prototype.__proto__
 *  Object.prototype.isPrototypeOf()
 *  Object.getPrototypeOf()
 *  Reflect.getPrototypeOf()
 *  instanceof
 */
var proto = {};
var p = new Proxy({}, {
  getPrototypeOf(target) {
    return proto;
  }
});
console.log(Object.getPrototypeOf(p) === proto);
// 上面代码中,getPrototypeOf方法拦截Object.getPrototypeOf(),返回proto对象
// getPrototypeOf方法的返回值必须是对象或者null，否则报错。
// 如果目标对象不可扩展，getPrototypeOf方法必须返回目标对象的原型对象。