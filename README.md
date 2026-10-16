Arquivos adicionados para a entrega da atividade de CORS.

Contém:
- api/server-api.js  (API que responde GET /dados com Access-Control-Allow-Origin: http://localhost:3000)
- client/index.html (cliente que faz fetch GET com header X-Identificador-Estudante: 2025104728)
- COR2.pdf (já presente no repositório)

Instruções rápidas:
1) Na pasta do repositório, rode a API:
   node api/server-api.js
   (a API escuta em http://localhost:8080)

2) Sirva a pasta client em http://localhost:3000. Exemplo com npm http-server:
   npm install -g http-server
   cd client
   http-server -p 3000

3) Abra http://localhost:3000 no navegador, abra DevTools (Network + Console), clique em "Executar Requisição". O navegador fará um preflight (OPTIONS) porque existe o header X-Identificador-Estudante; a API não responde OPTIONS e retornará 404 — isso é intencional para a atividade.

4) Capture uma imagem (print-entrega2.png) mostrando a aba Network com a coluna Method visível e a linha OPTIONS para /dados com erro 404/CORS, e a aba Console com a mensagem de preflight (Response to preflight request doesn't pass access control check...).

Boa entrega.
