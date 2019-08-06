const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// configures so we can have variable in our env variable
require('dotenv').config();

// Creates our express server on our port
const app = express();
const port = process.env.PORT || 5000;

// CORS middleware 
app.use(cors());

// Parses json sending and receiving
app.use(express.json());

// Database uri recieved from mongodb atalas
const uri = process.env.ATLAS_URI;

// how to start connection
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// Starts up the server, listening on a certain port
app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`);
});