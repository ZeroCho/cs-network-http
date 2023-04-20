const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    // 캐시 저장해도 되는데 항상 신선도 검사해~
    'Cache-Control': 'no-cache',
  });
  res.end('ok');
});
server.listen(8080, () => {
  console.log('8080 포트에서 대기 중...');
})
