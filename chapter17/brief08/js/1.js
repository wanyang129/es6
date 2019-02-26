// 如果一个对象的属性是Generator函数，可以简写成下面的形式。
let obj = {
  * myGeneratorMethod() {

  }
}
// 上面代码中，myGeneratorMehtod属性前面有一个星号，表示这个属性是一个Generator函数。
// 完整形式如下
let obj = {
  myGeneratorMethod: function* () {

  }
}