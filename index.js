const config = require('./config');

const express = require('express');
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors());

const tasksRoutes = require('./routes/tasksRoutes');
app.use('/api', tasksRoutes.routes);

const port = config.port;
app.listen(port, () => console.log('listening on http://localhost:' + port));