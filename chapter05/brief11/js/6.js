// 如果要在正则表达式内部引用某个具名组匹配,可以使用\k<组名>的写法
const RE_TWICE = /^(?<word>[a-z]+)!\k<word>$/;
console.log(RE_TWICE.test('abc!abc'));
console.log(RE_TWICE.test('abc!ab'));