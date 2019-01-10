// Set结构的实例与数组一样,也拥有forEach方法,用于对每个成员执行某种操作,没有返回值.
let set = new Set([1, 4, 9]);
set.forEach((value, key) => console.log(key + ':' + value));