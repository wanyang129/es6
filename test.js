/**
 * 1000
 * 168 171 169 165 198 165 167 173 168 172 166 173 166 169 164 165 169 171 162 167(双引号)
 * 191 166 167 180 172 162 172 187 178 182 159 179 171 159 165 177 172 167 171 162(单引号)
 * 10000
 * 1613 1503 1530 1482 1623 1503 1533 1567 1494 1547 1503 1539 1575 1633 1473 1655(双引号)
 * 1428 1484 1488 1599 1599 1603 1553 1476 1568 1525 1444 1460 1524 1468 1496 1592(单引号)
 */
function parse(str) {
  // 加入str为某个DOM字符串
  // result为处理之后的DOM节点
  let result = "";
  // 解码
  let decode = he.unescape(str, {
    strict: true
  });
  HTMLParser(decode, {
    start(tag, attrs, unary) {
      // 过滤常见危险的标签
      if (tag === 'script' || tag === 'img' || tag === 'link' || tag === 'style' || tag === 'iframe' || tag === 'frame')
        return;
      result += `<${tag}`;
      for (let i = 0; i < attrs.length; i++) {
        let name = (attrs[i].name).toLowerCase();
        let value = attrs[i].escaped;
        // 过滤掉微信的style属性和js事件
        if (name === 'style' || name === 'href' || name === 'src' || ~name.indexOf('on'))
          continue;
        result += ` ${name}=${value}`;
      }
      result += `${unary ? ' /' : ''}>`;
    },
    chars(text) {
      result += text;
    },
    comment(text) {
      result += `<!-- ${text} -->`;
    },
    end(tag) {
      result += `</${tag}>`;
    }
  });
  return result;
}

test.addEventListener('click', function () {
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        // 客户端解析JSON,并执行
        // test按钮的点击事件中唯一的变化就是使用parse对服务端返回的数据进行了解码和过滤的处理.
        var str = parse(JSON.parse(xhr.responseText).test);
        var node = `${str}`;
        document.body.insertAdjacentHTML('beforeend', node);
      }
    }
  }
})

/**
 * PHP网站的主要攻击方式
 *  命令注入(Command Injection)
 *  eval注入(Eval Injection)
 *  客户端脚本攻击(Script Injection)
 *  跨网站脚本攻击(Cross Site Scripting,XSS)
 *  SQL注入攻击(SQL Injection)
 *  跨网站请求伪造攻击(Cross Site Request Forgeries,CSRF)
 *  Session会话劫持(Session Hijacking)
 *  Session固定攻击(Session Fixation)
 *  HTTP响应拆分攻击(HTTP Response Splitting)
 *  文件上传漏洞(File Upload Attack)
 *  目录穿越漏洞(Directory Traversal)
 *  远程文件包含攻击(Remote Inclusion)
 *  动态函数注入攻击(Dynamic Variable Evaluation)
 *  URL攻击(URL attack)
 *  表单提交欺骗攻击(Spoofed Forrm Submissions)
 *  HTTP请求欺骗攻击(Spoofed HTTP Requests)
 */