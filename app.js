const bodyParser = require("body-parser");
const express = require('express');
const app = express();

const searchRoutes = require('./routes/search')
const usersRoutes = require('./routes/users')
const bookRoutes = require('./routes/book')
const connection = require('./connection')
const cors = require('cors');


app.use(bodyParser.json());
app.use(cors());


//Routes Definitions
app.use('/users', usersRoutes)
app.use('/search', searchRoutes)
app.use('/book', bookRoutes)


//Hardcoded port
app.listen(8080);
