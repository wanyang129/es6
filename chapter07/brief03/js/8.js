// 把函数包在一个无参数的立即执行函数里面
const doSomething = (function () {
  "use strict";
  return function (value = 42) {
    return value;
  };
}());