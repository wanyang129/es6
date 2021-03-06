/**
 * 先行断言指的是:x只有在y前面才匹配,必须写成/x(?=y)/.
 * 比如只匹配百分号之前的数字,要写成/\d+(?=%)/.
 * 先行否定断言指的是:x只有不在y前面才匹配,必须写成/x(?!y)/.
 * 比如只匹配不在百分号之前的数字,要写成/\d+(?!%)/.
 */
console.log(/\d+(?=%)/.exec('100% of Us presidents have been male'));
console.log(/\d+(?!%)/.exec('thats all 44 of them'));
// 先行断言括号之中的部分(?=%),是不计入返回结果的
/**
 * 后行断言正好与先行断言相反,x只有在y后面才匹配,必须写成/(?<=y)x/.
 * 比如,只匹配美元符号之后的数字,要写成/(?<=\$)\d+/.
 * 后行否定断言则与先行否定断言相反,x只有不在y后面才匹配,必须写成/(?<!y)x/.
 * 比如,只匹配不在美元符号后面的数字,要写成/(?<!\$)\d+/
 */
console.log(/(?<=\$)\d+/.exec("Benjamin Franklin is on the $100 bill"));
console.log(/(?<!\$)\d+/.exec("it's is worth about €90"));
// 后行断言的括号之中的部分(?<=\$)也是不计入返回结果

// 使用后行断言进行字符串替换
const RE_DOLLAR_PREFIX = /(?<=\$)foo/g;
console.log('$foo %foo foo'.replace(RE_DOLLAR_PREFIX, 'bar'));

// 后行断言的组匹配,与正常情况下结果是不一样的
console.log(/(?<=(\d+)(\d+))$/.exec('1053'));
console.log(/^(\d+)(\d+)$/.exec('1053'));
/**
 * 上面代码中,需要捕获两个组匹配.没有后行断言时,第一个括号是贪婪模式,第二个括号只能捕获一个字符,所以结果是105和3
 * 而后行断言时,由于执行顺序是从右到左,第二个括号是贪婪模式,第一个括号只能捕获一个字符,所以结果是1和053
 * 
 * 后行断言的反斜杠引用,也与通常的顺序相反,必须放在对应的那个括号之前
 */
console.log(/(?<=(o)d\1)r/.exec('hodor'));
console.log(/(?<=\1d(o))r/.exec('hodor'));