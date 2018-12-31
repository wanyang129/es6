/**
 * Array.from方法用于将两类对象转为真正的数组:类似数组的对象和可遍历的对象(包括es6新增的数据机构Set和Map)
 */
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};
console.log("arrayLike", arrayLike);
var arr1 = [].slice.call(arrayLike);
console.log("arr1", arr1);
let arr2 = Array.from(arrayLike);
console.log("arr2", arr2);