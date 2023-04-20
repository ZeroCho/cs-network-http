const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    // 캐시 저장하지 마!!!
    'Cache-Control': 'no-store',
  });
  res.end('ok');
});
server.listen(8080, () => {
  console.log('8080 포트에서 대기 중...');
})
