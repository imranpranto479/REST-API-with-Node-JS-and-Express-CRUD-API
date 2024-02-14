//this file is mainly for the setup of the server
//we will do routing in routes folder
//1
import express from 'express';
//const express = require("express");
//same code
import bodyParser from 'body-parser'; // take in incoming post request bodies
//6
import userRoutes from './routes/users.js';
//2
//initialize express application

const app = express(); //whole application lies on this varaiable
const PORT = 5000; //frontend localhost was always 3000
//3
//initialize body parser middlewire
app.use(bodyParser.json()); //will use json data in the whole application
//json -> javascript object notation  

//use of 6
app.use('/users',userRoutes);
//---
//5
//creating first route
app.get('/', (req, res)=>
    //console.log('[TEST]!'); //showing in terminal

    res.send('Hello from Homepage') //showing response in browser

);//expecting a get request in that home path
//-----
//we can make our application listen by incoming request in the port
//& and call back function will executed when we will run the server
//4
app.listen(PORT,()=>
console.log(`Server is running on port: http://localhost:${PORT}`)); //short error function syntax
// ` ` (backtick)