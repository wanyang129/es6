// 扩展运算符还可以将字符串转为真正的数组
console.log([..."hello"]);
// 上面的写法,有一个重要的好处,那就是能够正确识别四个字节的Unicode字符(目前浏览器并不支持此功能,依然是4)
console.log('x\uD83D\uDE80y'.length);
console.log([...'x\uD83D\uDE80y'].length);

function length(str) {
  return [...str].length;
}
console.log(length('x\uD83D\uDE80y'));