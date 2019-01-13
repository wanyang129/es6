var proxy = new Proxy({}, {
  get: function (target, property) {
    return 35;
  }
});
console.log(proxy.time);
console.log(proxy.name);
console.log(proxy.title);
/**
 * 上面代码中,作为构造函数,Proxy接受两个参数.
 * 第一个参数是所要代理的目标对象(上例是一个空对象),即如果没有Proxy的介入,操作原来要访问的就是这个对象;
 * 第二个参数是一个配置对象,对于每一个被代理的操作,需要提供一个对应的处理函数,该函数将拦截对应的操作.
 * 比如,上面代码中,配置对象有一个get方法,用来拦截对目标对象属性的访问请求.get方法的两个参数分别是目标对象和所要访问的属性.
 * 可以看到,由于拦截函数总是返回35,所以访问任何属性都得到35.
 */
// 要使得Proxy起作用,必须针对Proxy实例进行操作,而不是针对目标对象进行操作