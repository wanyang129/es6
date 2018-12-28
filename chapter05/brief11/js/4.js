// 有了具名组匹配以后,可以使用解构赋值直接从匹配结果上为变量赋值
let { groups: { one, two } } = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar');
console.log(one);
console.log(two);
// 字符串替换时,使用$<组名>引用具名组
let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
console.log('2015-01-02'.replace(re, '$<day>/$<month>/$<year>'));

// replace方法的第二个参数也可以是函数,改函数的参数序列如下
console.log('2015-01-02'.replace(re, (matchMedia, capture1, captrue2, captrue3, position, s, groups) => {
  let { day, month, year } = groups;
  return `${day}/${month}/${year}`;
}));