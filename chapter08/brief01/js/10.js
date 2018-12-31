// 扩展运算符提供了数组合并的新写法
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];
// es5的合并数组
const arr4 = arr1.concat(arr2, arr3);
console.log("arr1", arr1);
console.log("arr4", arr4);
// es6的合并数组
console.log("es6", [...arr1, ...arr2, ...arr3]);
// 上面两种方法都是浅拷贝