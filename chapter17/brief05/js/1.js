/**
 * Generator函数返回的遍历器对象,
 * 还有一个return方法,可以返回给定的值,并且终结遍历器Generator函数.
 */
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
var g = gen();
console.log(g.next());
console.log(g.return('foo'));
console.log(g.next());
/**
 * 上面代码中,遍历器对象g调用return方法后,返回值的value属性就是return方法的参数foo.
 * 并且,Generator函数的遍历就终止了,返回值的done属性为true,
 * 以后再调用next方法,done属性总是返回true.
 */