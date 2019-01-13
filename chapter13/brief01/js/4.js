// 如果handler没有设置任何拦截,那就等同于直接通向原对象.
var target = {};
var handler = {};
var proxy = new Proxy(target, handler);
proxy.a = 'b';
console.log(proxy.a);
// 将Proxy对象设置到object.proxy属性,从而可以在object对象上调用.
// var object={proxy:new Proxy(target,handler)};