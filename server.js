const express = require('express');
const dotenv = require('dotenv');
const cuisineRoutes = require('./routes/cuisineroutes')
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.port || 5000;

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Mongo DB connected");
})
.catch((error)=>{
    console.log(error);
})


app.use(bodyparser.json())
app.use('/cuisine',cuisineRoutes)

app.listen(port,()=>{
    console.log('Server started and running');
})