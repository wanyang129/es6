// 扩展运算符和Set结构相结合,就可以去除数组的重复成员
let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)];
console.log(unique);
// 数组的map和filter方法也可以间接用于Set了
let set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));
console.log(set);

let set2 = new Set([1, 2, 3, 4, 5]);
set2 = new Set([...set2].filter(x => (x % 2) == 0));
console.log(set2);

// 使用Set可以很容易的实现并集、交集和差集
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// 并集
let union = new Set([...a, ...b]);
console.log(union);
// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
console.log(intersect);
// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
console.log(difference);