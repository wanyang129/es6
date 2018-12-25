// javscript内部,字符以UTF-16的格式存储,每个字符固定为2个字节.对于那些需要4个字节存储的字符(Unicode码点大于0xFFFF的字符),javascript会认为它们是两个字符.
var s = "𠮷";
console.log(s.length);
console.log(s.charAt(0));
console.log(s.charAt(1));
console.log(s.charCodeAt(0));
console.log(s.charCodeAt(1));
// es6提供了codePointAt方法,能够正确处理4个字节存储的字符,返回一个字符的码点.
console.log(s.codePointAt(0));
console.log(s.codePointAt(1));
// codePointAt方法会正确返回32位的UTF-16字符的码点.对于那些两个字节存储的常规字符,它的返回结果与charCodeAt方法相同.
console.log(s.codePointAt(0).toString(16));
console.log(s.codePointAt(1).toString(16));
for (let ch of s) {
  console.log(ch.codePointAt(0).toString(16));
}
function is32Bit(c) {
  return c.codePointAt(0) > 0xFFFF;
}
console.log(is32Bit(s));
console.log(is32Bit("a"));