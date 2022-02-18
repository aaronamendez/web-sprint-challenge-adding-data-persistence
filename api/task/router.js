// build your `/api/tasks` router here
const express = require('express');
const tasksRouter = express.Router();

tasksRouter.get('/', (req, res) => {
	res.json('Ok!');
});

tasksRouter.post('/', (req, res) => {
	res.json('Ok!');
});

module.exports = tasksRouter;
