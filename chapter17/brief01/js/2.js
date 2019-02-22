/**
 * 由于Generator函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，
 * 所以其实提供了一种可以暂停执行的函数。yield表达式就是暂停标志。
 * 
 * 遍历器对象的next方法的运行逻辑如下。
 *  1.遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值作为返回的对象的value属性值。
 *  2.下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。
 *  3.如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回对象的value属性值。
 *  4.如果该函数么有return语句，则返回的对象的value属性值为undefined。
 */
function* gen() {
  yield 123 + 456;
}
// Generator函数可以不用yield表达式，这时就变成了一个单纯的暂缓执行函数。
function* f() {
  console.log('执行了!');
}
var generator = f();
setTimeout(() => {
  generator.next()
}, 2000);
// yield表达式只能用在Generator函数里面，用在其他地方都会报错。
var arr = [1, [[2, 3], 4], [5, 6]];
var flat = function* (a) {
  a.forEach(function (item) {
    if (typeof item !== 'number') {
      yield * flat(item);
    } else {
      yield item;
    }
  })
}
// forEach方法的参数是一个普通函数，但是在里面使用了yield表达式
for (var f of flat(arr)) {
  console.log(f);
}