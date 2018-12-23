/**
 * 浏览器里面,顶层对象是window,但Node和Web Worker没有window
 * 浏览器和Web Worker里面,self也指向顶层对象,但是Node没有self
 * Node里面,顶层对象是global,但其它环境都不支持.
 */
(typeof window !== "undefined" ? window : (typeof process === "object" && typeof require === "function" && typeof global === "object") ? global : this);
var getGlobal = function () {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== undefined) {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
};