var g = function* () {
  try {
    yield;
  } catch (e) {
    console.log(e);
  }
}
var i = g();
i.next();
i.throw(new Error('出错了!'));
// 上面代码的错误,是用遍历器对象的throw方法抛出的,而不是用throw命令抛出的.