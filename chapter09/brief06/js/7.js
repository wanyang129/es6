// 对象的扩展运算符...用于去除参数对象的所有可遍历属性,拷贝到当前对象之中.
let z = { a: 3, b: 4 };
let n = { ...z };
console.log(n);

// 由于数组是特殊的对象,所以对象的扩展运算符也可以用于数组.
let foo = { ...['a', 'b', 'c'] };
console.log(foo);

// 如果扩展运算符是一个空对象,则没有任何效果
console.log({ ...{}, a: 1 });

// 如果扩展运算符后面不对象,则会自动将其转为对象
console.log({ ...1 });

console.log({ ...true });
console.log({ ...undefined });
console.log({ ...null });

// 如果扩展运算符后面是字符串,它会自动转成一个类似数组的对象,因此返回的不是空对象.
console.log({ ...'hello' });