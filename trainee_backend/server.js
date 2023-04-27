const express = require('express');
const dotenv = require('dotenv').config();
const bodyParse = require('body-parser');
const bodyParser = require('body-parser');
const {errorHandler} = require('./middleware/errorMiddleware');
const colors = require('colors');
const connectDB = require('./config/db');
const cors = require('cors')




// const port= process.env.PORT || 5000;
const port = 5000;

const app = express();
connectDB();
// app.use(express.json);
// app.use(express.urlencoded({extended:true}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Defining Error Handler
app.use(errorHandler)

app.use(cors())


app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// const corsOptions = {
//     origin: 'http://www.Goaltracker.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }
  
//   app.use(cors(corsOptions));



app.listen(port,()=> console.log(`Server Running on port ${port}`));