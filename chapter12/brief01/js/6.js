// Array.from方法可以将Set结构转为数组
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
console.log(array);

function dedupe(array) {
  return Array.from(new Set(array));
}
console.log(dedupe([1, 1, 2, 3]));