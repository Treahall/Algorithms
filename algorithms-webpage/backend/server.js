const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Create express application and get port from .env.
const app = express();
const port = process.env.PORT || 5000;
// Middleware for our express app that only parses json.
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongooseDB database connection established successfully");
})

const usersRouter = require('./routes/users');
const algorithmRouter = require('./routes/algorithms')
app.use('/users', usersRouter);
app.use('/algorithms', algorithmRouter);

app.listen(port, () => {
    console.log(`Server is running on the port: ${port}`);
});
<<<<<<< HEAD

=======
>>>>>>> drawer-routing
