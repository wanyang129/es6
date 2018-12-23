// function func() {
//   // let不允许在相同作用域内,重复声明同一个变量
//   let a = 10;
//   var a = 1;
// }
function func(arg) {
  // 不能在函数内部重新声明参数
  let arg
}
function func(arg) {
  {
    let arg;
  }
}