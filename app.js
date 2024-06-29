// // backend/app.js

// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./Backend/routes/auth');

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Routes
// app.use('/api/auth', authRoutes);

// // Database connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// module.exports = app;

// console.log("hello")
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const usrRoutes = require('./Routes/userRoutes')

const app = express();

mongoose.connect(process.env.MONGODB_URL).then(()=>{
  console.log("mongodb connection successful")
});

app.use(express.json())

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("<h1>oddo</h1>");
});

app.use('/user',usrRoutes)
app.listen(5000, () => {
  console.log("servere started");
});
