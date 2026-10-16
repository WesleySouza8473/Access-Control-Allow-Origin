const http = require('http');

const PORT = 8080;

const server = http.createServer((req, res) => {
  // GET /dados - returns student JSON
  if (req.method === 'GET' && req.url === '/dados') {
    const body = JSON.stringify({ ra: '2025104728', nome: 'WESLEY DOS SANTOS DE SOUZA' });
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(body),
      // Required by the assignment: allow only http://localhost:3000
      'Access-Control-Allow-Origin': 'http://localhost:3000'
    });
    res.end(body);
    return;
  }

  // Do NOT handle OPTIONS - assignment expects preflight to fail (404)
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

server.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
