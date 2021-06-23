const mongoose = require('mongoose');

const Task = mongoose.model('task', {
    title: String,
    body: String
});

module.exports = Task;