/**
 * 整个Generator函数就是一个封装的异步任务,或者说是异步任务的容器.
 * 异步操作需要暂停的地方,都用yield语句组名.
 */
function* gen(x) {
  var y = yield x + 2;
  return y;
}
var g = gen(1);
console.log(g.next());
console.log(g.next());