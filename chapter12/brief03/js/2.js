// Map构造函数接受数组作为参数,实际上执行的是下面的算法.
const items = [
  ['name', '张三'],
  ['title', 'Author']
];
const map = new Map();
items.forEach(([key, value]) => map.set(key, value));
console.log(map);

/**
 * 事实上,不仅仅是数组,任何具有Iterator接口,且每个成员都是一个双元素的数组的数据结构都可以当做Map构造函数的参数.
 * 这就是说,Set和Map都可以用来生成新的Map
 */
const set = new Set([
  ['foo', 1],
  ['bar', 2]
]);
const m1 = new Map(set);
console.log(m1.get('foo'));

const m2 = new Map([['baz', 3]]);
const m3 = new Map(m2);
console.log(m3.get('baz'));