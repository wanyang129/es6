// 由于大括号被解释为代码块,所以如果箭头函数直接返回一个对象,必须在对象外面加上括号,否则会报错
// 报错
// let getTempItem = id => { id: id, name: "Temp" };
let getTempItem = id => ({ id: id, name: "Temp" });

let foo = () => { a: 1 };
console.log(foo());

// 如果箭头函数只有一行语句,且不需要返回值,可以采用下面的写法,就不用写大括号了
let fn = () => void doesNotReturn();