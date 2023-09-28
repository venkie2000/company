const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require('dotenv');
const connectDb = require("./config/db");
//const url =require('url');
// const fs = require('fs');

//const x =url.parse(req,res.url,true)

//console.log('x');

const port = process.env.PORT || 3000;
dotenv.config();

// connect
connectDb('companyUsers', 'users');

// create our express app
const app = express()

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// route
// const userRouter = require('./routes/userRoutes')

// app.use('/api', require('./routes/userRoutes'));
app.use('/api/company', require('./routes/companyRoute'));
app.use('/api/client',require('./routes/clientRoute'));
app.use('/api/employee',require('./routes/employeeRoute'));

console.log("index.js")

//start server
app.listen(port, () => {
    console.log(` Server listening at port:${port}`);

});
