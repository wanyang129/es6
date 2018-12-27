// es2018引入了一种新的类的写法\p{...}和\P{...},运行正则表达式匹配符合Unicode某种属性的所有字符
const regexGreekSymbol = /\p{Script=Greek}/u;
console.log(regexGreekSymbol.test('π'));
// \p{Script=Greek}指定匹配一个希腊文字母
// Unicode属性类要指定属性名和属性值
// \p{UnicodePropertyName=UnicodePropertyValue}
// 对于某些属性,可以只写属性名,或者只写属性值
// \p{UnicodePropertyName}
// \p{UnicodePropertyValue}
// \P{...}是\p{...}的反相匹配,即匹配不满足条件的字符
/**
 * 这两种类只对Unicode有效,所以使用的时候一定要加上u修饰符.
 * 如果不加u修饰符,正则表达式使用\p和\P会报错.
 * 由于Unicode的各种属性非常多,所以这种新的类的表达能力非常强
 */
// 属性类指定匹配所有十进制字符
const regex = /^\p{Decimal_Number}+$/u;
console.log(regex.test('1234567990123456'));
console.log(regex.test('𝟏𝟐𝟑𝟜𝟝𝟞𝟩𝟪𝟫𝟬𝟭𝟮𝟯𝟺𝟻𝟼'));
// \p{Number}}能匹配罗马数字
const regex2 = /^\p{Number}+$/u;
console.log(regex2.test('²³¹¼½¾'));
console.log(regex2.test('㉛㉜㉝'));
console.log(regex2.test('ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ'));

// 匹配所有空格
// \p{White_Space}
// 匹配各种文字的所有字母,等同于Unicode版的\w
// 

const regexArrows = /^\p{Block=Arrows}+$/u;
console.log(regexArrows.test('←↑→↓↔↕↖↗↘↙⇏⇐⇑⇒⇓⇔⇕⇖⇗⇘⇙⇧⇩'));