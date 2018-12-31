/**
 * 函数内部的严格模式,同时适用于函数体和函数参数.
 * 但是,函数执行的时候,先执行函数参数,然后再执行函数体.
 * 这样就有一个不合理的地方,只有从函数体之中,才能知道参数是否应该以严格模式执行,
 * 但是参数却应该先于函数体执行.
 */
function doSomething(value = 070) {
  "use strict";
  return value;
}