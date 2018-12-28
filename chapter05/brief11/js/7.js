// 数字引用(\1)依然有效
const RE_TWICE = /^(?<word>[a-z]+)!\1$/;
console.log(RE_TWICE.test('abc!abc'));
console.log(RE_TWICE.test('abc!ab'));