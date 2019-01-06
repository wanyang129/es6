// 扩展运算符可以用于合并两个对象.
let ab = { ...a, ...b };
// 等同于
let ab = Object.assign({}, a, b);
// 如果用户自定义的属性,放在扩展运算符后面,则扩展运算符内部的同名属性会被覆盖掉
let aWithOverrides = { ...a, x: 1, y: 2 };
// 等同于
let aWithOverrides = { ...a, ...{ x: 1, y: 2 } };
// 等同于
let x = 1, y = 2, aWithOverrides = { ...a, x, y };
// 等同于
let aWithOverrides = Object.assign({}, a, { x: 1, y: 2 });
// 上面代码中,a对象的x属性和y属性,拷贝到新对象后会被覆盖掉

// 这用来修改现有对象部分的属性就很方便了
let newVersion = {
  ...previousVersion,
  name: 'New Name'
};
// 如果把自定义属性放在扩展运算符前面,就变成了设置新对象的默认属性值
let aWithDefaults = { x: 1, y: 2, ...a };
// 等同于
let aWithDefaults = Object.assign({}, { x: 1, y: 2 }, a);
// 等同于
let aWithDefaults = Object.assign({ x: 1, y: 2 }, a);