var obj = {
  a: 10
};
// 如果原对象不可配置或者禁止扩展,这时has拦截会报错.
Object.preventExtensions(obj);
var p = new Proxy(obj, {
  has: function (target, prop) {
    return false;
  }
});
console.log('a' in p);
/**
 * has方法拦截的是HasProperty操作,而不是HasOwnProperty操作,即has方法不判断一个属性是对象自身的属性,还是继承的属性.
 */