// defineProperty方法拦截了Object.defineProperty操作
var handler = {
  defineProperty(target, key, descriptor) {
    return false;
  }
};
var target = {};
var proxy = new Proxy(target, handler);
proxy.foo = "bar";
console.log(proxy.foo);
/**
 * 如果目标对象不可扩展,则defineProperty不能增加目标对象上不存在的属性,否则会报错.
 * 另外,如果目标对象的某个属性不可写或不可配置,则defineProperty方法不得改变这两个设置
 */