const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routes/api');

//routes
app.use('/', apiRouter);

app.listen(port, () => {
    console.log('essa');
});
