const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/redirect') {
    res.writeHead(200);
    res.end('ok');
    return;
  }
  res.writeHead(301, {
    'Location': '/redirect',
  });
  res.end();
});
server.listen(8080, () => {
  console.log('8080 포트에서 대기 중...');
})
