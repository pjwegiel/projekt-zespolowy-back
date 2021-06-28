const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors')

//db
require('./db/mongoose');

//parsers
//content-type: application/json
app.use(bodyParser.json());

//fix cors
app.use(cors());

//routes
app.use('/api/', apiRouter);

app.listen(port, () => {
    console.log('essa');
});
