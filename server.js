const http = require('http');
const app = require('./app');
//express app

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port);
//simple server setup
