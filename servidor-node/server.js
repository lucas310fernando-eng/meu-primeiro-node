const http = require('http');

const server = http.createServer((req, res) => {
    // Exibe no terminal a URL que o usuário tentou acessar
    console.log(`URL acessada: ${req.url}`);

    // Configura os acentos para o navegador
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    // Mapeamento das Rotas
    if (req.url === '/') {
        res.statusCode = 200; // Define o status de sucesso
        res.end('Bem-vindo à minha aplicação Node.js!');
        
    } else if (req.url === '/sobre') {
        res.statusCode = 200;
        res.end('Esta é a página sobre a aplicação.');
        
    } else if (req.url === '/alunos') {
        res.statusCode = 200;
        res.end('Lista de alunos da turma.');
        
    } else if (req.url === '/contato') {
        res.statusCode = 200;
        res.end('Entre em contato conosco.');
        
    } else {
        // TRATAMENTO DE ROTA INEXISTENTE (A pesquisa que o exercício pediu)
        // Se a requisição não cair em nenhum dos "ifs" acima, ela cai aqui no "else"
        res.statusCode = 404; // 404 é o código padrão da internet para "Não Encontrado"
        res.end('Erro 404: Página não encontrada.');
    }
});

server.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000. Acesse http://localhost:3000');
});