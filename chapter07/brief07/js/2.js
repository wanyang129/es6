// 函数调用会在内存形成一个"调用记录",又称"调用帧",保存调用位置和内部变量等信息
function f() {
  let m = 1;
  let n = 2;
  return g(m + n);
}
f();
// 等同于
function f() {
  return g(3);
}
f();
// 等同于
g(3);