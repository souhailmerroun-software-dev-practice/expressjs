const db = require('../db');
const taskModel = require('../models/task');
const { collection, addDoc } = require('firebase/firestore');

const storeTask = async (req, res, next) => {
    console.log(req.body);
    res.send("wait");
    /*try {
        const { title } = req.body;
        const docRef = await addDoc(collection(db, "tasks"), {
            title: title
        });

        res.send(docRef);
    } catch (error) {
        console.log(error);
        res.send(error);
    }*/
}

module.exports = {
    storeTask
}