// 遍历Map结构
// 任何部署了Iterator接口的对象,都可以用for...of循环遍历.
// Map结构原生支持Iterator接口,配合变量的解构赋值,获取键名和键值就非常方便
const map = new Map();
map.set("first", "hello");
map.set("second", "world");
for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// 获取键名
for (let [key] of map) {

}
// 获取键值
for (let [, value] of map) {

}
// 加载模考时,往往需要指定输入哪些方法.结构赋值使得输入语句非常清晰
const { SourceMapConsumer, SourceNode } = require("source-map");