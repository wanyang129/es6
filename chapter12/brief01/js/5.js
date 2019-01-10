/**
 * Set结构的实例有以下属性.
 *  Set.prototype.constructor:构造函数,默认就是Set函数
 *  Set.prototype.size:返回Set实例的成员总数
 * 
 * 
 * Set实例的方法分为两大类:操作方法(用于操作数据)和遍历方法(用于遍历成员).
 *  add(value):添加某个值,返回Set结构本身
 *  delete(value):删除某个值,返回一个布尔值,表示删除是否成功
 *  has(value):返回一个布尔值,表示该值是否为Set的成员
 *  clear():清除所有成员,没有返回值
 */
const s = new Set();
s.add(1).add(2).add(2);
console.log(s.size);
console.log(s.has(1));
console.log(s.has(2));
console.log(s.has(3));
s.delete(2);
console.log(s.has(2));

const properties = {
  'width': 1,
  'height': 1
};
if (properties[someName]) { }

const properties = new Set();
properties.add('width');
properties.add('height');

if (properties.has(someName)) { }