const db = require('../db');
const taskModel = require('../models/task');

const storeTask = async (req, res, next) => {
    try {
        const data = req.body;
        const task = await db.collection('tasks').doc().set(data);
        res.send(task);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    storeTask
}