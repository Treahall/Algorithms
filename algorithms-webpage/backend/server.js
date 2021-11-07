const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(fileUpload());

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
