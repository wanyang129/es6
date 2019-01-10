/**
 * 如果想在遍历操作中,同步改变原来的Set结构,目前没有直接的方法,但有两种变通方法.
 * 一种是利用原Set结构映射出一个新的结构,然后赋值给原来的Set结构;另一种是利用Array.from方法
 */
let set = new Set([1, 2, 3]);
set = new Set([...set].map(val => val * 2));
console.log(set);

let set2 = new Set([1, 2, 3]);
set2 = new Set(Array.from(set2, val => val * 2));
console.log(set2);