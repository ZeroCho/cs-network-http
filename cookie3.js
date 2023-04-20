const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    // 한글 안돼요 ASCII\
    // https에서만 돼서 실습 시 쿠키가 설정되지 않아요.
    'Set-Cookie': 'zerocho=babo; Max-Age=10; SameSite=None',
  });
  res.end('ok');
});
server.listen(8080, () => {
  console.log('8080 포트에서 대기 중...');
})
