const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    // max-age가 지나면 꼭 서버에 재확인해야해(무조건 재확인 아님, 만료 이후면)
    'Cache-Control': 'max-age=6, must-revalidate',
    // Expires는 쓰지 말기
  });
  res.end('ok');
});
server.listen(8080, () => {
  console.log('8080 포트에서 대기 중...');
})
