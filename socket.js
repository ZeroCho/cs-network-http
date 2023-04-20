const http = require('http');
const { WebSocketServer } = require('ws');
const fs = require('fs').promises;
const path = require('path');

const server = http.createServer(async (req, res) => {
    const data = await fs.readFile(path.join(__dirname, 'socket.html'));
    res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"'});
    res.end(data);
});
server.listen(8981, () => {
    console.log('8981 포트에서 서버 실행 중');
});

// 아래를 통째로 주석처리하면 서버가 웹소켓을 지원하지 않을 경우 어떻게 되는지 확인할 수 있어요.
const wss = new WebSocketServer({ server });
wss.on('connection', (ws) => {
    ws.on('error', console.error);
    ws.on('message', (data) => {
        console.log(data.toString());
    });
    setInterval(() => {
        ws.send('매초 서버에서 클라이언트로 데이터 보내기');
    }, 1000);
});