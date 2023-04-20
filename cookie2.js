const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    // 한글 안돼요 ASCII
    // 200초 이후에는 Cookie에서 사라져요
    'Set-Cookie': 'zerocho=babo; Max-Age=200',
  });
  res.end('ok');
});
server.listen(8080, () => {
  console.log('8080 포트에서 대기 중...');
})
