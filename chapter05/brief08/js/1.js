// 正则表达式中,.是一个特殊的字符,代表任意的单个字符,但是有两个例外.
// 一个是四个字节的UTF-16字符,这个可以用u修饰符解决,另一个是行终止符.
/**
 * 所谓行终止符,就是该字符表示一行的终结
 * U+000A 换行符(\n)
 * U+000D 回车符(\r)
 * U+2028 行分隔符
 * U+2029 段分隔符
 */
console.log(/foo.bar/.test('foo\nbar'));
console.log(/foo[^]bar/.test('foo\nbar'));
// es2018引入s修饰符,使得.可以匹配任意单个字符
console.log(/foo.bar/s.test('foo\nbar'));
// 这被称为dotAll模式,即点(dot)代表一切字符.所以正则表达式还引入了一个dotAll属性,返回一个布尔值,表示该正则表达式是否处在dotAll模式.
const re = /foo.bar/s;
console.log(re.test('foo\nbar'));
console.log(re.dotAll);
console.log(re.flags);
// s修饰符和多行修饰符m不冲突,两者一起使用的情况下,.匹配所有字符,而^和$匹配每一行的行首和行尾