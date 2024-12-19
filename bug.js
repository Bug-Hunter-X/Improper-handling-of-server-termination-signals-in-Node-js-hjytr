const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello, World!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
  // This will cause an error because the server is not properly closed
});

//This is missing to properly handle server close event
//server.on('close', () => {
//  console.log('Server closed');
//});
//process.on('SIGINT', () => {
//  server.close(() => {
//    console.log('Server closed gracefully');
//    process.exit();
//  });
//});