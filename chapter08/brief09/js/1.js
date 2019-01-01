// 数组的成员有时还是数组，Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。
console.log([1, 2, [3, 4]].flat());
// flat()默认只会拉平一层,如果想要拉平多层的嵌套数组,可以将flat()方法的参数写成一个整数,表示想要拉平的层数,默认为1
console.log([1, 2, [3, [4, 5]]].flat());
console.log([1, 2, [3, [4, 5]]].flat(2));
// 如果不管有多少层嵌套,都要转成一维数组,可以用Infinity关键字作为参数
console.log([1, [2, 3]].flat(Infinity));
// 如果原数组有空位,flat()方法会跳过空位
console.log([1, 2, , 4, 5].flat());