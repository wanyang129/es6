/**
 * yield表达式本身没有返回值,或者说总是返回undefined.
 * next方法可以带一个参数,该参数就会被当做上一个yield表达式的返回值.
 */
function* f() {
  for (var i = 0; true; i++) {
    var reset = yield i;
    if (reset) {
      i = -1;
    }
  }
}
var g = f();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next(true));
console.log(g.next(true));
/**
 * 上面代码定义了一个可以无限运行的Generator函数f,如果next方法没有参数,
 * 每次运行到yield表达式,变量reset的值总是undefined.
 * 当next方法带一个参数true时,变量reset就被重置为这个参数(即true),
 * 因此i会等于-1,下一轮循环就会从-1开始递增.
 * 
 * 这个功能有很重要的语法意义.Generator函数从暂停状态到恢复运行,
 * 它的上下文状态(context)是不变的.
 * 通过next方法的参数,就有办法在Generator函数开始运行之后,继续向函数体内部注入值.
 * 也就是说,可以在Generator函数运行的不同阶段,从外部想内部注入不同的值,从而调整函数行为.
 */
console.log("=================");
function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}
var a = foo(5);
console.log(a.next());
console.log(a.next());
console.log(a.next());

console.log("====================");
var b = foo(5);
console.log(b.next());
console.log(b.next(12));
console.log(b.next(13));
// x=5 y=24 z=13
/**
 * 由于next方法的参数表示上一个yield表达式的返回值,所以在第一次使用next方法时,传递参数是无效的.
 * V8引擎直接忽略第一次使用next方法时的参数,只有从第二次使用next方法开始,参数才算有效的.
 * 从语义上将,第一个next方法用来启动遍历器对象,所以不用带有参数.
 */
console.log("===================");
function* dataConsumer() {
  console.log('Started');
  console.log(`1. ${yield}`);
  console.log(`2. ${yield}`);
  return 'result';
}
let genObj = dataConsumer();
genObj.next();
genObj.next('a');
genObj.next('b');

// 如果想要第一次调用next方法时,就能够输入值,可以在Generator函数外面再包一层.
function wrapper(generatorFunction) {
  return function (...args) {
    let generatorObject = generatorFunction(...args);
    generatorObject.next();
    return generatorObject;
  };
}
const wrapped = wrapper(function* () {
  console.log(`First input:${yield}`);
  return 'DONE';
});
wrapped().next('hello');
