const express = require('express');

const { storeTask } = require('../controllers/tasksController');

const router = express.Router();

router.post('/tasks', storeTask)

module.exports = {
    routes: router
}