// 普通字符串
console.log(`In JavaScript '\n' is a line-feed.`);
// 多行字符串
console.log(`In JavaScript this is
not legal`);
console.log(`string text line 1
string text line 2`);
// 字符串中嵌入变量
let name = "Bob", time = "today";
console.log(`Hello ${name},how are you ${time}`);
// 如果在模板字符串中需要使用反引号,则前面要用反斜杠转义
let greeting = `\`Yo\` World!`;
console.log(greeting);