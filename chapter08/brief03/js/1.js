// Array.of方法用于将一组值,转换为数组
console.log(Array.of(3, 11, 8));
console.log(Array.of(3));
console.log(Array.of(3).length);

console.log("===============");
console.log(Array());
console.log(Array(3));
console.log(Array(3, 11, 8));
console.log("===============");
console.log(Array.of());
console.log(Array.of(undefined));
console.log(Array.of(1));
console.log(Array.of(1, 2));

function ArrayOf() {
  return [].slice.call(arguments);
}