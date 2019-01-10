// WeakMap结构与Map结构类似,也是用于生成键值对的集合
const wm1 = new WeakMap();
const key = { foo: 1 };
wm1.set(key, 2);
console.log(wm1.get(key));

// WeakMap也可以接受一个数组,作为构造函数的参数
const k1 = [1, 2, 3];
const k2 = [4, 5, 6];
const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);
console.log(wm2.get(k2));

// WeakMap只接受对象作为键名(null除外),不接受其他类型的值作为键名
// WeakMap的键名所指向的对象,不计入垃圾回收机制

const e1 = document.getElementById('foo');
const e2 = document.getElementById('bar');
const arr = [
  [e1, 'foo元素'],
  [e2, 'bar元素']
];

const wm = new WeakMap();
const element = document.getElementById('example');
wm.set(element, 'some information');
wm.get(element);