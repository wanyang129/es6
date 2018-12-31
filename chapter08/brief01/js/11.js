const a1 = [{ foo: 1 }];
const a2 = [{ bar: 2 }];

const a3 = a1.concat(a2);
const a4 = [...a1, ...a2];

console.log("a3", a3);
console.log("a4", a4);

console.log(a3[0] === a1[0]);
console.log(a4[0] === a1[0]);

/**
 * 上面代码中,a3和a4是用两种不同方法合并而成的新数组,但是它们的成员都是对原数组成员的引用,这就是浅拷贝.
 * 如果修改了原数组的成员,会同步反映到新数组
 */
a1[0].foo = 6;
console.log("a3 after", a3);
console.log("a4 after", a4);

console.log("a1 after", a1);