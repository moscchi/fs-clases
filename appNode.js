const http = require('http');

const PORT = 5000

const server = http.createServer((request, response) => {
    console.log('Url: ', request.url);
    console.log('Method: ', request.method);
    console.log('******************************');
    
    

    if(request.url === '/'){
        response.write('Bienvenidos a mi CRUD server.');
        response.end();
    }
    if(request.url === '/products' && request.method === 'POST') {

    }
})

server.listen(PORT);

console.log(`Server is running in port ${PORT}!`);