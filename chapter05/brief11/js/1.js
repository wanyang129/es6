// 正则表达式使用圆括号进行组匹配
const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/;
const matchObj = RE_DATE.exec('1999-12-31');
console.log(matchObj);
const year = matchObj[1];
const month = matchObj[2];
const day = matchObj[3];
console.log(year);
console.log(month);
console.log(day);
