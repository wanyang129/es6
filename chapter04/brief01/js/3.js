// 只要将码点放入大括号,就能正确解读该字符
console.log("\u{20BB7}");
console.log("\u{41}\u{42}\u{43}");
let hello = 123;
console.log("hell\u{6F}");
// 大括号表示法与四字节的UTF-16编码是等价的
console.log('\u{1F680}' === '\uD83D\uDE80');