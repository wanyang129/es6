// construct()方法用于拦截new命令
var handler = {
  construct(target, args, newTarget) {
    return new target(...args);
  }
}
/**
 * construct方法可以接受两个参数
 *  target:目标对象
 *  args:构造函数的参数对象
 *  newTarget:创造实例对象时,new命令作用的构造函数
 */
var p = new Proxy(function () { }, {
  construct: function (target, args) {
    console.log('called:' + args.join(', '));
    return { value: args[0] * 10 };
  }
});
console.log((new p(1)).value);
// construct方法返回的必须是一个对象,否则会报错
var p2 = new Proxy(function () { }, {
  construct: function (target, argumentsList) {
    return 1;
  }
});
console.log(new p());