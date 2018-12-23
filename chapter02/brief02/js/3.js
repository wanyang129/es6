// let实际上为javascript新增了块级作用域
function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n);
}
f1();
// 块级作用域的出现,实际上使得获得广泛应用的立即执行函数表达式不再必要了