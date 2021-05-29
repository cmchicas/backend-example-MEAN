const express = require('express');
const morgan = require('morgan');

const app = express();

//setting
app.set('port', process.env.PORT || 3000)

app.use(morgan('dev'));
//para entender objetos json
app.use(express.json());
//para entender los formularios html
app.use(express.urlencoded({extended: false} ))

app.use("/api/employees", require('./routes/employees.routes'));

module.exports = app;