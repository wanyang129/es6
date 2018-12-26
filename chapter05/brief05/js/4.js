const REGEX = /a/gy;
console.log("aaxa".replace(REGEX, "-"));
// 单单一个y修饰符对match方法,只能返回第一个匹配,必须与g修饰符联用,才能返回所有匹配
console.log("a1a2a3".match(/a\d/y));
console.log("a1a2a3".match(/a\d/gy));
// y修饰符的一个应用,是从字符串提取token(词元),y修饰符确保了匹配之间不会有漏掉的字符.
const TOKEN_Y = /\s*(\+|[0-9]+)\s*/y;
const TOKEN_G = /\s*(\+|[0-9]+)\s*/g;
function tokenize(TOKEN_REGEX, str) {
  let result = [];
  let match;
  while (match = TOKEN_REGEX.exec(str)) {
    result.push(match[1]);
  }
  return result;
}
console.log(tokenize(TOKEN_Y, '3+4'));
console.log(tokenize(TOKEN_G, '3+4'));

console.log(tokenize(TOKEN_Y, '3x+4'));
console.log(tokenize(TOKEN_G, '3x+4'));