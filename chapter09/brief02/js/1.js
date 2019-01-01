// javascript定义对象的属性由两种方法
// 用标识符作为属性名
obj.foo = true;
// 用表达式作为属性名
obj['a' + 'bc'] = 123;

// 如果使用字面量方式定义对象(使用大括号),在es5中只能使用标识符定义属性
var obj = {
  foo: true,
  abc: 123
};