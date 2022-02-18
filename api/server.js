// build your server here and require it from index.js
const express = require('express');
const server = express();

// Routers
const resourcesRouter = require('./resource/router');
const projectsRouter = require('./project/router');
const tasksRouter = require('./task/router');

server.use(express.json());
server.use('/api/resources', resourcesRouter);
server.use('/api/projects', projectsRouter);
server.use('/api/tasks', tasksRouter);

module.exports = server;
