// 两个对象总是不相等的
let set = new Set();
set.add({});
console.log(set.size);
set.add({});
console.log(set.size);