// 如果一个正则表达式在字符串里面有多个匹配,现在一般使用g修饰符或y修饰符,在循环里面逐一取出
var regex = /t(e)(st(\d?))/g;
var string = 'test1test2test3';
var matches = [];
var match;
while (match = regex.exec(string)) {
  matches.push(match);
}
console.log(matches);