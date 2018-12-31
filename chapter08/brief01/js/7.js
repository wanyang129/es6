const a1 = [1, 2];
// concat()方法用于连接两个或多个数组.
// 该方法不会改变现有的数组,而仅仅会返回被连接数组的一个副本
const a2 = a1.concat();
a2[0] = 2;
console.log("a1", a1);