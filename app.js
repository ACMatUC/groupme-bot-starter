'use strict';

const director = require('director');
const Server   = require('./lib/server');

// Create a router for GET and POST requests to the app
const router = new director.http.Router({
    '/': {
        post: Server.postResponse,
        get: Server.getResponse
    }
});

// Check if the `--dev` flag was passed
const devMode = process.argv[2] === '--dev';

// Start listening
const server = new Server(router, devMode);
server.serve();
