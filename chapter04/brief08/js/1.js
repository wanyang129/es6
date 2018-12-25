// 字符串补全长度的功能:如果某个字符串不够指定长度,会在头部或尾部补全.padStart()用于头部补全,padEnd()用于尾部补全.
console.log("x".padStart(5, "ab"));
console.log("x".padStart(4, "ab"));
console.log("x".padEnd(5, "ab"));
console.log("x".padEnd(4, "ab"));
// 如果原字符串的长度等于或大于最大长度,则字符串补全不生效,返回原字符串
console.log("xxx".padStart(2, "ab"));
console.log("xxx".padEnd(2, "ab"));
// 如果用来补全的字符串与原字符串,两者的长度之和超过了最大长度,则会截去超出位数的补全字符串
console.log("abc".padStart(10, "0123456789"));
// 如果省略第二个参数,默认使用空格补全长度
console.log("x".padStart(4));
console.log("x".padEnd(4));
// padStart()的常见用途是为数值补全指定位数.下面代码生成10位的数值字符串
console.log("1".padStart(10, "0"));
console.log("12".padStart(10, "0"));
console.log("123456".padStart(10, "0"));
// 另一个用途是提示字符串格式
console.log("12".padStart(10, "YYYY-MM-DD"));
console.log("09-12".padStart(10, "YYYY-MM-DD"));