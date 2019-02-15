// 有一些场合会默认调用Iterator接口（即Symbol.iterator方法），除了下文会介绍的for...of循环，还有几个别的场合。
// 对数组和Set结构进行解构赋值时，会默认调用Symbol.iterator方法。
let set = new Set().add('a').add('b').add('c');
let [x, y] = set;
console.log(x);
console.log(y);
let [first, ...rest] = set;
console.log(first);
console.log(rest);