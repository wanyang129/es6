/**
 * 对象的Symbol.isConcatSpreadable属性等于一个布尔值,表示该对象用于Array.prototype.concat()时,是否可以展开.
 */
let arr1 = ['c', 'd'];
console.log(['a', 'b'].concat(arr1, 'e'));
console.log(arr1[Symbol.isConcatSpreadable]);

let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;
console.log(['a', 'b'].concat(arr2, 'e'));

/**
 * 上面代码说明,数组的默认行为是可以展开,
 * Symbol.isConcatSpreadable默认等于undefined.
 * 该属性等于true时,也有展开的效果.
 * 
 * 类似数组的对象正好相反,默认不展开.它的Symbol.isConcatSpreadable属性设为true,才可以展开.
 */
let obj = { length: 2, 0: 'c', 1: 'd' };
console.log(['a', 'b'].concat(obj, 'e'));
obj[Symbol.isConcatSpreadable] = true;
console.log(['a', 'b'].concat(obj, 'e'));

// Symbol.isConcatSpreadable属性也可以定义在类里面.
class A1 extends Array {
  constructor(args) {
    super(args);
    this[Symbol.isConcatSpreadable] = true;
  }
}
class A2 extends Array {
  constructor(args) {
    super(args);
  }
  get [Symbol.isConcatSpreadable]() {
    return false;
  }
}
let a1 = new A1();
a1[0] = 3;
a1[1] = 4;
let a2 = new A2();
a2[0] = 5;
a2[1] = 6;
console.log([1, 2].concat(a1).concat(a2));