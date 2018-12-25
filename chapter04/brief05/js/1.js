console.log("\u01D1" === "\u004F\u030C");
console.log("\u01D1".length);
console.log("\u004F\u030C".length);
// es6提供字符串实例的normalize()方法,用来将字符的不同表示方法统一为同样的形式,这称为Unicode正规化
console.log("\u01D1".normalize() === "\u004F\u030C".normalize());
// normalize方法可以接受一个参数来指定normalize的方式,参数的四个可选值:NFC、NFD、NFKC、NFKD

console.log("\u004F\u030C".normalize("NFC").length);
console.log("\u004F\u030C".normalize("NFD").length);