// preventExtensions方法拦截Object.preventExtensions().该方法必须返回一个布尔值,否则会被自动转为布尔值.
// 这个方法有一个限制,只有目标对象不可扩展时,即Object.isExtensible(proxy)为false,proxy.preventExtensions才能返回true,否则会报错.
var proxy = new Proxy({}, {
  preventExtensions: function (target) {
    console.log('called');
    Object.preventExtensions(target);
    return true;
  }
});
console.log(Object.preventExtensions(proxy));