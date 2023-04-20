const http = require('http');
const server = http.createServer((req, res) => {
  // 여기서 상태 코드 변경 가능
  res.writeHead(200);
  // 여기서 응답 메시지 변경 가능
  res.end('ok');
});
server.listen(8080, () => {
  console.log('8080 포트에서 대기 중...');
})
