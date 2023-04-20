const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    // 7일동안 캐시 유지, 7일이 지나서 상해도 그 후 하루(86400)동안에는 캐시 사용가능
    // 대신 서버한테서 새로운 거 물어보기
    'Cache-Control': 'max-age=604800, stale-while-revalidate=86400',
  });
  res.end('ok');
});
server.listen(8080, () => {
  console.log('8080 포트에서 대기 중...');
})
