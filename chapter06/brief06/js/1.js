console.log(Math.pow(2, 53));
console.log(Math.pow(2, 53) === Math.pow(2, 53) + 1);

// es6引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量,用来表示这个范围的上下限
console.log(Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1);
console.log(Number.MAX_SAFE_INTEGER === 9007199254740991);
console.log(Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER === -9007199254740991);