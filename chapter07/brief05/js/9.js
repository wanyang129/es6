/**
 * this指向固定化,并不是因为箭头函数内部有绑定this的机制,
 * 实际原因是箭头函数根本没有自己的this,
 * 导致内部的this就是外层代码块的this.
 * 正是因为它没有this,所以也就不能用作构造函数
 */
// es6
function foo() {
  setTimeout(() => {
    console.log("id:", this.id);
  }, 1000);
}
// es5
function foo() {
  var _this = this;
  setTimeout(function () {
    console.log("id:", _this.id);
  }, 1000);
}
// 转换后的es5版本清除地说明了,箭头函数里面根本没有自己的this,而是引用外层的this