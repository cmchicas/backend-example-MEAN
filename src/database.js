const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://cchicas:PVEGxDOKoBKXHdbL@cluster0.ssyn0.mongodb.net/mean-employees?retryWrites=true&w=majority', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then((db) => console.log("DB is connected"))
    .catch((err) => console.log(err));



