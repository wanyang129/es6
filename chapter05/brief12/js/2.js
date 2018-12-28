/**
 * 目前有一个提案,增加了String.prototype.matchAll方法,可以一次性取出所有匹配.
 * 不过,它返回的是一个遍历器,而不是数组.
 */
const string = 'test1test2test3';
const regex = /t(e)(st(\d?))/g;
for (const match of string.matchAll(regex)) {
  console.log(match);
}
// 遍历器转为数组是非常简单的,使用...运算符和Array.from方法就可以了