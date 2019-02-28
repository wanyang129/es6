// Generator函数内部还可以部署错误处理代码,捕获函数体外抛出的错误.
function* gen(x) {
  try {
    var y = yield x + 2;
  } catch (e) {
    console.log(e);
  }
  return y;
}
var g = gen(1);
console.log(g.next());
g.throw('出错了');