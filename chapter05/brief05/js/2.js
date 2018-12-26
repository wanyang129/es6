// 使用lastIndex属性,可以更好的说明y修饰符
const REGEX = /a/g;
REGEX.lastIndex = 2;
const match = REGEX.exec("xaya");
console.log("match", match);
REGEX.lastIndex = 4;
console.log(REGEX.exec("xaya"));
// lastIndex属性指定每次搜索开始的位置