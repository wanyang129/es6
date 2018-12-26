let data = {
  supplies: ["broom", "mop", "cleaner"]
};
let template = `
  <ul>
    <% for(let i=0;i<data.supplies.length;i++){%>
      <li><%= data.supplies[i] %></li>
    <% } %>
  </ul>
`;
console.log("template模板字符串", template);

let template_str = "echo('<ul>')";
for (let i = 0, len = data.supplies.length; i < len; i++) {
  template_str += "echo('<li>')";
  template_str += data.supplies[i];
  template_str += "echo('</li>')";
}
template_str += "echo('</ul>')";
console.log("template字符串", template_str);
/**
 * RegExp对象表示正则表达式,它是对字符串执行模式匹配的强大工具.
 * 直接量语法:
 * /pattern/attributes
 * 
 * new RegExp(pattern,attributes);
 * 参数pattern是一个字符串,指定了正则表达式的模式或其他正则表达式
 * 
 * 参数attributes是一个可选的字符串,包含属性"g","i","m",分别用于指定全局匹配,区分大小写的匹配和多行匹配.
 * 
 * 一个新的RegExp对象,具有指定的模式和标志.如果参数pattern是正则表达式而不是字符串,
 * 那么RegExp()构造函数将用与指定的RegExp相同的模式和标志创建一个新的RegExp对象
 * 如果不用new运算符,而将RegExp()作为函数调用,那么它的行为与用new运算符调用时一样,
 * 只是当pattern是正则表达式时,它只返回pttern,而不再创建一个新的RegExp对象.
 */
/**
 * .:查找单个字符,除了换行和结束符
 */
console.log("before replace", template);
let evalExpr = /<%=(.+?)%>/g;
let expr = /<%([\s\S]+?)%>/g;
template = template.replace(evalExpr, '`); \n echo($1); \n echo(`');
console.log("after first replace", template);
template = template.replace(expr, '`); \n $1 \n echo(`');
console.log("after second replace", template);
template = 'echo(`' + template + '`);';
console.log(template);
function returnTemplate() {
  let script = `(function parse(data){
    let output="";
    function echo(html){
      output+=html;
    }
    ${template}
    return output;
  })`;
  return script;
}
console.log(returnTemplate());