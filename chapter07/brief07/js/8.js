/**
 * es6的尾调用优化只在严格模式下开启,正常模式是无效的.
 * 这是因为在正常模式下,函数内部有两个变量,可以跟踪函数的调用栈.
 *  func.arguments:返回调用时函数的参数
 *  func.caller:返回调用当前函数的那个函数
 */
function restricted() {
  "use strict";
  restricted.caller;
  restricted.arguments;
}
restricted();