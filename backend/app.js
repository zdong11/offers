const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');

mongoose
.connect(
  "mongodb+srv://offers:12345mamun@cluster0-dsp9y.mongodb.net/test?retryWrites=true")
  .then(() => {
    console.log('Connnect to the datanase');
  })
  .catch(() => {
    console.log('Connection failed');
  });

const app = express();
// This is for all json format data
app.use(bodyParser.json());
// This is for the all url encorded data
app.use(bodyParser.urlencoded( { extended : false} ));

// This all are for the CORS ERROR Handeling
app.use((req , res , next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
  next();
});
// CORS END

app.use("/api/posts", postsRoutes);

module.exports = app;
