// Reflect.has方法对应name in obj里面的in运算符
var myObject = {
  foo: 1
};
'foo' in myObject
Reflect.has(myObject, 'foo');
// 如果第一个参数不是对象,Reflect.has和in运算符都会报错.