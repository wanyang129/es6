// 不完全解构,即等号左边的模式,只匹配一部分的等号右边的数组.这种情况下,解构依然可以成功.
let [x, y] = [1, 2, 3];
console.log(x);
console.log(y);
let [a, [b], d] = [1, [2, 3], 4];
console.log(a);
console.log(b);
console.log(d);

// 如果等号的右边不是数组(或者严格的说,不是可遍历的结构),那么将会报错.
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};
