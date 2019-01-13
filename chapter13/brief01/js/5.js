// Proxy实例也可以作为其他对象的原型对象
var proxy = new Proxy({}, {
  get: function (target, proxy) {
    return 35;
  }
});
let obj = Object.create(proxy);
console.log(obj.name);
// 同一个拦截器函数,可以设置拦截多个操作
var handler = {
  get: function (target, name) {
    if (name === 'prototype') {
      return Object.prototype;
    }
    return 'Hello, ' + name;
  },
  apply: function (target, thisBinding, args) {
    return args[0];
  },
  construct: function (target, args) {
    return { value: args[1] };
  }
};
var fproxy = new Proxy(function (x, y) {
  return x + y;
}, handler);
console.log(fproxy(1, 2));
console.log(new fproxy(1, 2));
console.log(fproxy.prototype === Object.prototype);
console.log(fproxy.foo === "Hello, foo");
/**
 * 下面是Proxy支持的拦截操作一览,一共13种.
 *  get(target,propKey,receiver):拦截对象属性的读取,比如proxy.foo和proxy['foo']
 *  set(target,propKey,value,receiver);拦截对象属性的设置,比如proxy.foo=v或proxy['foo']=v,返回一个布尔值
 *  has(target,propKey):拦截propKey in proxy的操作,返回一个布尔值.
 *  deleteProperty(target,propKey):拦截delete proxy[propKey]的操作,返回一个布尔值
 *  ownKeys(target):拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环,返回一个数组.
 *  该方法返回目标对象所有自身的属性的属性名,而Object.keys()的返回结果仅包括目标对象自身的可遍历属性.
 *  getOwnPropertyDescriptor(target,propKey):拦截Object.getOwnPropertyDescriptor(proxy,propKey),返回属性的描述对象.
 *  definePropery(target,propKey,propDesc):拦截Object.defineProperty(proxy,propKey,propDesc)、Object.defineProperties(proxy,propDesc),返回一个布尔值.
 *  preventExtensions(target):拦截Object.preventExtensions(proxy),返回一个布尔值.
 *  getPrototypeOf(target):拦截Object.getPrototypeOf(proxy),返回一个对象.
 *  isExtensible(target):拦截Object.isExtensible(proxy),返回一个布尔值.
 *  setPrototypeOf(target,proto):拦截Object.setPrototypeOf(proxy,proto),返回一个布尔值.如果目标对象是函数,那么还有两种额外操作可以拦截.
 *  apply(target,object,args):拦截Proxy实例作为函数调用的操作,比如proxy(...args)、proxy.call(object,...args)、proxy.apply(...).
 *  construct(target,args):拦截Proxy实例作为构造函数调用的操作,比如new proxy(...args)
 */