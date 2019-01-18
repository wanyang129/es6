// 如果目标对象自身包含不可配置的属性,则改属性必须被ownKeys方法返回,否则报错.
var obj = {};
Object.defineProperty(obj, 'a', {
  configurable: false,
  enumerable: true,
  value: 10
});
var p = new Proxy(obj, {
  ownKeys: function (target) {
    return ["a", "b"];
  }
});
console.log(Object.getOwnPropertyNames(p));