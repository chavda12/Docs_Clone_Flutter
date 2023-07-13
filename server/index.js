const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT | 3001;

const app = express();
const DB = 'mongodb+srv://ChavdaVarsha:varsha@cluster0.mbe8kbf.mongodb.net/';

mongoose.connect(DB).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
})

app.listen(PORT,"0.0.0.0",()=>{
    console.log(`connected at ${PORT}`);
    console.log(`connected at ${PORT}........`);
});