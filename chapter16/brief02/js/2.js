let arr = ['a', 'b', 'c'];
// Symbol.iterator属性本身是一个函数,就是当前数据结构默认的遍历器生成函数,执行这个函数,就会返回一个遍历器.
let iter = arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());