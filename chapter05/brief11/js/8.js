// \k<组名>和(\1)引用可以同时使用
const RE_TWICE = /^(?<word>[a-z]+)!\k<word>!\1$/;
console.log(RE_TWICE.test('abc!abc!abc'));
console.log(RE_TWICE.test('abc!abc!ab'));