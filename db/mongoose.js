const mongoose = require('mongoose');

//db connection
mongoose.connect('mongodb+srv://dbUser:dbUserPassword@cluster0.9y72j.mongodb.net/tasklist?retryWrites=true&w=majority',
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then(() => console.log('essa'))
    .catch(err => console.log(err));

