// 如果对同一个键多次赋值,后面的值将覆盖前面的值
const map = new Map();
map.set(1, 'aaa').set(1, 'BBB');
console.log(map.get(1));
// 如果读取一个未知的键,则返回undefined
console.log(new Map().get('asdfasfdasfd'));