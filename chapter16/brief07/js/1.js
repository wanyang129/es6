/**
 * 一个数据结构只要部署了Symbol.iterator属性，就被视为具有iterator接口，就可以用for...of循环遍历它的成员。
 * 也就是说，for...of循环内部调用的是数据结构的Symbol.iterator方法。
 * 
 * for...of循环可以使用的范围包括数组、Set和Map结构、某些类似数组的对象（比如arguments对象、DOM NodeList对象）、Generator对象，以及字符串。
 */