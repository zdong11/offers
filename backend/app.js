const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');

mongoose
.connect(
  "mongodb://thowoo:QYVCB63OhOAwdw9C@fooddatabase-shard-00-00-d4jrv.mongodb.net:27017,fooddatabase-shard-00-01-d4jrv.mongodb.net:27017,fooddatabase-shard-00-02-d4jrv.mongodb.net:27017/test?ssl=true&replicaSet=foodDatabase-shard-0&authSource=admin&retryWrites=true", { useNewUrlParser: true })
  .then(() => {
    console.log('Connnect to the datanase');
  })
  .catch((e) => {
    console.log('Connection failed', e);
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
