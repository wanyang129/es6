let { keys, values, entries } = Object;
let obj = { a: 1, b: 2, c: 3 };
for (let key of keys(obj)) {
  console.log(key);
}
for (let value of values(obj)) {
  console.log(value);
}
for (let [key, value] of entries(obj)) {
  console.log([key, value]);
}