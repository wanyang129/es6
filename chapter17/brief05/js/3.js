/**
 * 如果Generator函数内部有try...finally代码块,且正在执行try代码块,
 * 那么return方法会推迟到finally代码块执行完再执行.
 */
function* numbers() {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield 4;
    yield 5;
  }
  yield 6;
}
var g = numbers();
console.log(g.next());
console.log(g.next());
console.log(g.return(7));
console.log(g.next());
console.log(g.next());
/**
 * 上面代码中,调用return方法后,就开始执行finally代码块,
 * 然后等到finally代码块执行完,再执行return方法.
 */