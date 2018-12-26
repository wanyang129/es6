// es6对正则表达式添加了u修饰符,含义为"Unicode"模式,用来正确处理大于\uFFFF的Unicode字符
// 也就是说,会正确处理四个字节的UTF-16编码
console.log(/^\uD83D/u.test('\uD83D\uDC2A'));
console.log(/^\uD83D/.test('\uD83D\uDc2A'));
// .字符在正则表达式中,含义是除了换行符以外的任意单个字符,对于码点大于0xFFFF的Unicode字符,点字符不能识别,必须加上u修饰符
console.log("===============点字符===============");
var s = '𠮷';
console.log(/^.$/.test(s));
console.log(/^.$/u.test(s));
// es6新增了使用大括号表示Unicode字符,这种表示法在正则表达式中必须加上u修饰符,才能识别当中的大括号,否则会被解读为量词.
console.log("=================Unicode字符表示法============================");
console.log(/\u{61}/.test('a'));
console.log(/\u{61}/u.test('a'));
// 使用u修饰符后,所有量词都会正确识别码点大于0xFFFF的Unicode字符
console.log("===============量词================")
console.log(/a{2}/.test('aa'));
console.log(/a{2}/u.test('aa'));
console.log(/𠮷{2}/.test('𠮷𠮷'));
console.log(/𠮷{2}/u.test('𠮷𠮷'));
// u修饰符也影响到预定义模式,能否正确识别码点大于0xFFFF的Unicode字符
console.log("============预定义模式============");
console.log(/^\S$/.test('𠮷'));
console.log(/^\S$/u.test('𠮷'));
// \S是预定义模式
function codePointLength(text) {
  // match()方法可以在字符串内检索指定的值,或找到一个或多个正则表达式的匹配
  var result = text.match(/[\s\S]/gu);
  return result ? result.length : 0;
}
var s = '𠮷𠮷';
console.log(s.length);
console.log(codePointLength(s));
console.log("============i修饰符==============");
console.log(/[a-z]/i.test('\u212A'));
console.log(/[a-z]/iu.test('\u212A'));
// 不加u修饰符,就无法识别非规范的K字符