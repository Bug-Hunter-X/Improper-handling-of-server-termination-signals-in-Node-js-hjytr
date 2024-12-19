const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello, World!' }));
};

const server = http.createServer(requestListener);

const gracefulShutdown = () => {
  console.log('Received termination signal. Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed.');
    process.exit();
  });
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});