//import http from 'http'
const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write("Bienvenido a mi primer servidor con node :)");
    response.end();
  }
  if(request.url === '/2') {
    const value = 10 * 2;
    response.write(`Tu resultado es ${value}`);
    response.end()
  }
  if(request.url === '/3') {
    const value = 10 * 3;
    response.write(`Tu resultado es ${value}`);
    response.end()
  }
});

server.listen(8080);

console.log("Server listening in port 8080");
