// 提取JSON数据
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};
let { id, status, data: number } = jsonData;
console.log(id);
console.log(status);
console.log(number);

// 上面代码可以快速提取JSON数据的值