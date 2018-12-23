// 顶层对象,在浏览器环境指的是window对象,在Node指的是global对象.es5之中,顶层对象的属性与全局变量是等价的
window.a = 1;
console.log(a);
a = 2;
console.log(window.a);
let b = 1;
console.log(window.b);