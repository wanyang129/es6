// 传统上,javascript只有indexOf方法,可以用来确定一个字符串是否包含在另一个字符串中.
/**
 * es6提供了三种新方法
 *  includes():返回布尔值,表示是否找到了参数字符串
 *  startsWith():返回布尔值,表示参数字符串是否在原字符串的头部
 *  endsWith():返回布尔值,表示参数字符串是否在原字符串的尾部
 */
let s = "Hello world!";
console.log(s.startsWith("Hello"));
console.log(s.endsWith("!"));
console.log(s.includes("o"));
// 这三个方法都支持第二个参数,表示开始搜索的位置
let s2 = "Hello world!";
console.log(s.startsWith("world", 6));
console.log(s.endsWith("Hello", 5));
console.log(s.includes("Hello", 6));
// 使用第2个参数n时,endsWith的行为与其他两个方法有所不同.它针对前n个字符,而其他两个方法针对从第n个位置直到字符串结束