// 如果只验证运算结果是否为安全整数,很可能得到错误结果
function trusty(left, right, result) {
  if (Number.isSafeInteger(left) && Number.isSafeInteger(right) && Number.isSafeInteger(result)) {
    return result;
  }
  throw new RangeError('Operation cannot be trusted!');
}
console.log(trusty(1, 2, 3));
trusty(9007199254740993, 990, 9007199254740993 - 990);