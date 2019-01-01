let birth = '2000//01/01';
const Person = {
  name: '张三',
  birth,
  hello() {
    console.log('我的名字是', this.name);
  }
}
function getPoint() {
  const x = 1;
  const y = 10;
  return { x, y };
}
console.log(getPoint());