const http = require('http');
const server = http.createServer((req, res) => {
  // 원하는 헤더를 여기에 직접 넣어보세요. 커스텀 헤더는 X로 시작하는 게 좋습니다.
  res.writeHead(200, {
    'X-Date': 'world',
  });
  res.end('ok');
});
server.listen(8080, () => {
  console.log('8080 포트에서 대기 중...');
})
