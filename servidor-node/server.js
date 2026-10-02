const http = require('http');

const server = http.createServer((req, res) => {
    // 1. Observando a requisição no terminal
    console.log(req.method);

    // Configurando acentuação para o navegador
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    
    // 2. Modificando a resposta para apresentar o método na tela
    // O \n serve para pular uma linha no texto
    res.end(`Servidor Node.js funcionando!\nMétodo utilizado: ${req.method}`);
});

server.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000'); 
});