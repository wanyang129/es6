// 由于解构赋值要求等号右边是一个对象,所以如果等号右边是undefined或null,就会报错,因为它们无法转为对象.
// let { x, y, ...z } = null;
let { x, y, ...z } = undefined;