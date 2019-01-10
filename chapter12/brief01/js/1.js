// Set类似于数组,但是成员的值都是唯一的,没有重复的值
// Set本身是一个构造函数,用来生成Set数据结构
const s = new Set();
[2, 3, 5, 4, 5, 2, 3].forEach(x => s.add(x));
console.log(s);
for (let i of s) {
  console.log(i);
}
// Set结构不会添加重复的值
// Set函数可以接受一个数组(或者具有iterable接口的其他数据结构)作为参数,用来初始化.
const set = new Set([1, 2, 3, 4, 4]);
console.log([...set]);

const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(items.size);
