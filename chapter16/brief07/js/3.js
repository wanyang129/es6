/**
 * javascript原有的for...in循环,只能获得对象的键名,不能直接获取键值.
 * es6提供for...of循环,允许遍历获得键值.
 */
const arr = ['a', 'b', 'c', 'd'];
for (let a in arr) {
  console.log(a);
}
for (let a of arr) {
  console.log(a);
}