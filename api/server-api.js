const http = require('http');

// Dados do estudante — troque se necessário
const dados = {
  ra: '2025104728',
  nome: 'WESLEY DOS SANTOS DE SOUZA'
};

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/dados') {
    // Fase A: liberar a origem
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000' // <--- exigido pelo enunciado
    });
    res.end(JSON.stringify(dados));
    return;
  }

  // Não tratamos OPTIONS aqui de propósito (a API deve responder 404 para OPTIONS)
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
});

const PORT = 8080;
server.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
