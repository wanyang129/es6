/**
 * next(),throw(),return()这三个方法本质上是同一件事.
 * 它们的作用都是让Generator函数恢复执行,并且使用不同的语句替换yield表达式.
 * 
 * next()是将yield表达式替换成一个值.
 */
const g = function* (x, y) {
  let result = yield x + y;
  return result;
}
const gen = g(1, 2);
console.log(gen.next());
// 相当于将let result=yield x+y;替换成let result=1;
console.log(gen.next(1));
// throw是将yield表达式替换成一个throw语句.
// gen.throw(new Error('出错了'));
// 相当于是将let result=yield x+y;替换成let result=throw new Error('出错了');

// return()是将yield表达式替换成一个return语句.
console.log(gen.return(2));
// 相当于将let result=yield x+y;替换成let result=return 2;