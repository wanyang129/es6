// 扩展运算符也会调用默认的Iterator接口
var str = 'hello';
console.log([...str]);
let arr = ['b', 'c'];
console.log(['a', ...arr, 'd']);
/**
 * 可以将任何部署了Iterator接口的树结构，转为数组。
 * 也就是说，只要某个数据结构部署了Iterator接口，就可以对它使用扩展运算符，将其转为数组。
 */
// let arr = [...iterable];