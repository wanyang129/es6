function logInOrder(urls) {
  // 远程读取所有URL
  const textPromises = urls.map(url => {
    return fetch(url).then(response => response.text());
  });
  textPromises.reduce((chain, textPromises) => {
    return chain.then(() => textPromises).then(text => console.log(text));
  }, Promise.resolve());
}
async function logInOrder(urls) {
  for (const url of urls) {
    const response = await fetch(url);
    console.log(await response.text());
  }
}
async function logInOrder(urls) {
  const textPromises = urls.map(async url => {
    const response = await fetch(url);
    return response.text();
  });
  for (const textPromise of textPromises) {
    console.log(await textPromise);
  }
}