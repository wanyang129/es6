// setPrototypeOf方法主要用来拦截Object.setPrototypeOf方法.
var handler = {
  setPrototypeOf(target, proto) {
    throw new Error("Changing the prototype is forbidden");
  }
};
var proto = {};
var target = function () { };
var proxy = new Proxy(target, handler);
Object.setPrototypeOf(proxy, proto);
// 如果目标对象不可扩展,setPrototypeOf方法不得改变目标对象的原型.