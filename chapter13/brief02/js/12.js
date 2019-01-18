// apply方法拦截函数的调用、call和apply操作.
// apply方法可以接受三个参数,分别是目标对象、目标对象的上下文对象(this)和目标对象的参数数组.
// var handler={
//   apply(target,ctx,args){
//     return Reflect.apply(...arguments);
//   }
// };
var target = function () {
  return 'I am the target';
};
var handler = {
  apply: function () {
    return 'I am the proxy';
  }
};
var p = new Proxy(target, handler);
console.log(p());