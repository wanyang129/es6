// 正则实例对象新增unicode属性,表示是否设置了u修饰符
const r1 = /hello/;
const r2 = /hello/u;
console.log(r1.unicode);
console.log(r2.unicode);
// 正则表达式是否设置了u修饰符,可以从unicode属性看出来