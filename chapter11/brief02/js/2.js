// Symbol值作为对象属性名时,不能用电运算符.
const mySymbol = Symbol();
const a = {};
a.mySymbol = 'Hello!';
console.log(a[mySymbol]);
console.log(a['mySymbol']);

// 在对象的内部,使用Symbol值定义属性时,Symbol值必须放在方括号之中.
let s = Symbol();
// let obj = {
//   [s]: function (arg) { }
// };

// 采用增强的代码写法
let obj = {
  [s](arg) { }
};
obj[s](123);

const log = {};
log.levels = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARN: Symbol('warn')
};
console.log(log.levels.DEBUG, 'debug message');
console.log(log.levels.INFO, 'info message');