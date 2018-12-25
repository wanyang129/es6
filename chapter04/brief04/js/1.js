// es6为字符串添加了遍历器接口,使得字符串可以被for...of循环遍历
for (let codePoint of "foo") {
  console.log(codePoint);
}
// 除了遍历字符串,这个遍历器最大的优点是可以识别大于0xFFFF的码点,传统的for循环无法识别这样的码点.
let text = String.fromCodePoint(0x20BB7);
console.log("text", text);
for (let i = 0, len = text.ength; i < len; i++) {
  console.log(text[i]);
}
for (let i of text) {
  console.log(i);
}
// 字符串text只有一个字符,但是for循环会认为它包含两个字符(都不可打印),而for...of循环会正确识别出这一个字符.