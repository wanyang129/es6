// javascript允许采用\uxxxx形式表示一个字符,其中xxxx表示字符的Unicode码点.
console.log("\u0061");
// 但是这种表示法只限于码点在\u000~\uFFFF之间的字符.超出这个范围的字符,必须用两个双字节的形式表示
console.log("\uD842\uDFB7");
console.log("\u20BB7");
// 如果直接在\u后面跟上超过0xFFFF的数值(比如\u20BB7),javascript会理解成\u20BB+7