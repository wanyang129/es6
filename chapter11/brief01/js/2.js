// Symbol函数的参数只是表示对当前Symbol值的描述,因此相同参数的Symbol函数的返回值是不相等的.
// 没有参数的情况
let s1 = Symbol();
let s2 = Symbol();
console.log(s1 === s2);

// 有参数的情况
let s3 = Symbol('foo');
let s4 = Symbol('foo');
console.log(s3 === s4);
// Symbol值不能与其他类型的值进行运算,会报错.
let sym = Symbol('My symbol');
// 'your symbol is ' + sym;
// `your symbol is ${sym}`

// 但是,Symbol值可以显示转为字符串
console.log(String(sym));
console.log(sym.toString());

// Symbol值也可以转为布尔值,但是不能转为数值.
console.log(Boolean(sym));
Number(sym);