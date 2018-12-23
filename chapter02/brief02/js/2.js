var s = "hello";
// 用来计数的循环变量泄漏为全局变量
for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}
console.log(i);