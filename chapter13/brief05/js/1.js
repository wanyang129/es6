// Proxy对象可以拦截目标对象的任意属性,这使得它很合适用来写Web服务的客户端.
const service = createWebService('http://example.com/data');
service.employees().then(json => {
  const employees = JSON.parse(json);
});
function createWebService(baseUrl) {
  return new Proxy({}, {
    get(target, propKey, receiver) {
      return () => httpGet(baseUrl + '/' + propKey);
    }
  });
}