// ownKeys方法返回的数组成员,只能是字符串或Symbole值,如果有其他类型的值,或者返回的根本不是数组,就会报错
var obj = {};
var p = new Proxy(obj, {
  ownKeys: function (target) {
    return [123, true, undefined, null, {}, []];
  }
});
console.log(Object.getOwnPropertyNames(p));