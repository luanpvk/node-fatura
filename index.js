const http = require('http');
const porta = 3000;

const server = http.createServer((req, res) => {
    console.log('url: ', req.url);
res.end(`
    <h1>teste</h1>
    
    
    `);
});

server.listen(porta, () => {
    console.log('Servidor rodando');
       console.log('Endereco: http://localhost:'+porta);
});