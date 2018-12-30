function foo() {
  return () => {
    return () => {
      return () => {
        console.log("id:", this.id);
      }
    }
  }
}
var f = foo.call({ id: 1 });
var t1 = f.call({ id: 2 })()();
var t2 = f().call({ id: 3 })();
var t3 = f()().call({ id: 4 });
// 上面代码之中,只有一个this,就是函数foo的this,所以t1、t2、t3都输出同样的结果.
// 因为所有的内层函数都是箭头函数,都没有自己的this,它们的this其实都是最外层foo函数的this