// Number.isSafeInteger()是用来判断一个整数是否落在这个范围之内.
console.log(Number.isSafeInteger('a'));
console.log(Number.isSafeInteger(null));
console.log(Number.isSafeInteger(NaN));
console.log(Number.isSafeInteger(Infinity));
console.log(Number.isSafeInteger(-Infinity));
console.log("=====================");
console.log(Number.isSafeInteger(3));
console.log(Number.isSafeInteger(1.2));
console.log(Number.isSafeInteger(9007199254740990));
console.log(Number.isSafeInteger(9007199254740992));
console.log("========================");
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1));
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));