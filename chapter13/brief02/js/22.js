// isExtensible方法拦截Object.isExtensible操作
var p = new Proxy({}, {
  isExtensible: function (target) {
    console.log("called");
    return true;
  }
});
console.log(Object.isExtensible(p));
// 这个方法有一个强限制,它的返回值必须与目标对象的isExtensible属性保持一致,否则就会抛出错误.
console.log(Object.isExtensible(proxy) === Object.isExtensible(target));