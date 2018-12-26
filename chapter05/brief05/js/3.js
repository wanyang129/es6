// y修饰符同样遵守lastIndex属性,但要求必须在lastIndex指定的位置发现匹配
const REGEX = /a/y;
REGEX.lastIndex = 2;
console.log(REGEX.exec("xaya"));
REGEX.lastIndex = 3;
const match = REGEX.exec("xaya");
console.log("index", match.index);
console.log("lastIndex", REGEX.lastIndex);
// 实际上,y修饰符隐含了头部匹配的标志^
console.log(/b/y.exec("aba"));
// y修饰符的设计本意,就是让头部匹配的标志^在全局匹配中都有效