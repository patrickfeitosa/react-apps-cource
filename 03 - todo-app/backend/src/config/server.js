const bodyParser = require('body-parser');
const express = require('express');
const allowCors = require('./cors.js');

const server = express();
const port = 3003;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
});

module.exports = server;