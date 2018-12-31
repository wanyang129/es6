// 实际应用中,常见的类似数组对象是DOM操作返回的NodeList集合,一级函数内部的arguments对象.Array.from都可以将它们转为真正的数组.
let ps = document.querySelector("p");
Array.from(ps).filter(p => {
  return p.textContent.length > 100;
});
function foo() {
  var args = Array.from(arguments);
}