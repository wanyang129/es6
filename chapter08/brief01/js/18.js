// 实现了Iterator接口的对象
// 任何Iterator接口的对象,都可以用扩展运算符转为真正的数组.
let nodeList = document.querySelectorAll("div");
let array = [...nodeList];
// NodeList对象实现了Iterator接口
// 对于那些没有部署Iterator接口的类似数组对象,扩展运算符就无法将其转为真正的数组
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};
let arr = [...arrayLike];