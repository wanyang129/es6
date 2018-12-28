// 匹配组的一个问题是,每一组匹配含义不容易看出来,而且只能用数字序号(比如matchObj[1])引用,要是组的顺序改变了,引用的时候就必须修改序号.
// es2018引入了具名组匹配,允许为每一个组匹配指定一个名字,既便于阅读代码,又便于引用
const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const matchObj = RE_DATE.exec('1999-12-31');
console.log(matchObj);
const year = matchObj.groups.year;
const month = matchObj.groups.month;
const day = matchObj.groups.day;
console.log(year);
console.log(month);
console.log(day);
/**
 * 具名组匹配在圆括号内部,模式的头部添加"问号+尖括号+组名"(?<year>),
 * 然后就可以在exec方法返回结果的groups属性上引用该组名.
 * 同时,数字序号(matchObj[1])依然有效
 * 
 * 具名组匹配等于为每一个组匹配加上了ID,便于描述匹配的目的.如果租的顺序变了,也不用改变匹配后的处理代码.
 * 如果具名组没有匹配,那么对应的groups对象属性会是undefined.
 */