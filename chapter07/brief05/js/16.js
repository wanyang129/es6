// 下面是一个部署管道机制的例子,即前一个函数的输出是后一个函数的输入.
const pipeline = (...funcs) => val => funcs.reduce((a, b) => b(a), val);
const plus1 = a => a + 1;
const mult2 = a => a * 2;
const addThenMult = pipeline(plus1, mult2);
console.log(addThenMult(5));