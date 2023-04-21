const express = require('express');
const dotenv = require('dotenv').config();
const bodyParse = require('body-parser');
const bodyParser = require('body-parser');
const {errorHandler} = require('./middleware/errorMiddleware');
const colors = require('colors');
const connectDB = require('./config/db');


const port= process.env.PORT || 5000;


const app = express();
connectDB();
// app.use(express.json);
// app.use(express.urlencoded({extended:true}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Defining Error Handler
app.use(errorHandler)

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.listen(port,()=> console.log(`Server Running on port ${port}`));