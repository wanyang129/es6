// 在es5中,RegExp构造函数的参数有两种情况
// 第一种情况,参数是字符串传,这时第二个参数表示正则表达式的修饰符(flag)
var regex = new RegExp("xyz", "i");
// 等价于
var regex = /xyz/i;
// 第二种情况,参数是一个正则表达式,这时会返回一个原有正则表达式的拷贝
var regex = new RegExp(/zyz/i);
// 等价于
var regex = /xyz/i;

// 但是es5不允许此时使用第二个参数添加修饰符,否则会报错
// var regex=new RegExp(/xyz/,'i');
/**
 * es6改变了这种行为,如果RegExp构造函数第一个参数是一个正则对象,那么可以使用第二个参数指定修饰符.
 * 而且返回的正则表达式会忽略原有的正则表达式的修饰符,只使用新指定的修饰符.
 */
new RegExp(/abc/ig, 'i').flags