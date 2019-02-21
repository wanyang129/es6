/**
 * for...in循环读取键名,for...of循环读取键值.
 * 如果要通过for...of循环,获取数组的索引,可以借助数组实例的entries方法和keys方法.
 * 
 * for...of循环调用遍历器接口,数组的遍历器接口只返回具有数字索引的属性.
 */
let arr = [3, 5, 7];
arr.foo = 'hello';
for (let i in arr) {
  console.log(i);
}
// for...of循环不会返回数组arr的foo属性
for (let i of arr) {
  console.log(i);
}
// Set和Map结构也原生具有Iterator接口,可以直接使用for...of循环
var enginees = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
for (var e of enginees) {
  console.log(e);
}

var es6 = new Map();
es6.set("edition", 6);
es6.set("committee", "TC39");
es6.set("standard", "ECMA-262");
for (var [name, value] of es6) {
  console.log(name + ": " + value);
}
/**
 * 上面代码演示了如何遍历Set结构和Map结构.
 * 遍历的顺序是按照各个成员被添加进数据结构的顺序.
 * Set结构遍历时,返回的是一个值,而Map结构遍历时,返回的是一个数组,该数组的两个成员分别为当前Map成员的键名和键值.
 */
let map = new Map().set('a', 1).set('b', 2);
for (let pair of map) {
  console.log(pair);
}
for (let [key, value] of map) {
  console.log(key + ": " + value);
}