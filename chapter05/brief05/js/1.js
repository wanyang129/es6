// y修饰符,叫做粘连(sticky)修饰符
/**
 * y修饰符的作用与g修饰符类似,也是全局匹配,后一次匹配都从上一次匹配成功的下一个位置开始.
 * 不同之处在于,g修饰符只要剩余位置中存在匹配就可以,而y修饰符确保匹配必须从剩余的第一个位置开始,也就是粘连的含义
 */
var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;
// exec()方法用于检索字符串中的正则表达式的匹配
// 返回一个数组,其中存放匹配的结果.如果未找到,则返回值为null
console.log(r1.exec(s));
console.log(r2.exec(s));

console.log(r1.exec(s));
console.log(r2.exec(s));

var r = /a+_/y;
console.log(r.exec(s));
console.log(r.exec(s));