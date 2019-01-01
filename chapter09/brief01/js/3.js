// CommonJS模考输出一组变量,就非常合适使用简洁写法
let ms = {};
function getItem(key) {
  return key in ms ? ms[key] : null;
}
function setItem(key, value) {
  ms[key] = value;
}
function clear() {
  ms = {};
}
module.exports = { getItem, setItem, clear };
// 等同于
module.exports = {
  getItem: getItem,
  setItem: setItem,
  clear: clear
}