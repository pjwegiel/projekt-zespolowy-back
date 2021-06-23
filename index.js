const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');

//db
require('./db/mongoose');

//parsers
//content-type: application/json
app.use(bodyParser.json());

//routes
app.use('/api/', apiRouter);

app.listen(port, () => {
    console.log('essa');
});
