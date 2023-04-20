const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    // 한글 안돼요 ASCII
    // HttpOnly라서 document.cookie로 접근할 수 없어요
    'Set-Cookie': 'hello=world; HttpOnly;',
  });
  res.end('ok');
});
server.listen(8080, () => {
  console.log('8080 포트에서 대기 중...');
})
