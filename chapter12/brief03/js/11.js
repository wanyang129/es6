const map = new Map([
  ['F', 'no'],
  ['T', 'yes']
]);
for (let keys of map.keys()) {
  console.log(keys);
}
for (let values of map.values()) {
  console.log(values);
}
for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
for (let [key, value] of map) {
  console.log(key, value);
}
// Map结构的默认遍历器接口(Symbol.iterator属性),就是entries方法
// map[Symbol.iterator]===map.entries