const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    // 공유 캐시~
    'Cache-Control': 'public, max-age=604800',
  });
  res.end('ok');
});
server.listen(8080, () => {
  console.log('8080 포트에서 대기 중...');
})
