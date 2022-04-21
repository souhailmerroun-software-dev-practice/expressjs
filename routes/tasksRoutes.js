const express = require('express');

const { storeTask } = require('../controllers/tasksController');

const router = express.Router();

module.exports = {
    routes: router
}