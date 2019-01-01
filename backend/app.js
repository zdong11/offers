const express = require('express');
const bodyParser = require('body-parser');

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
    "GET, POST, PATCH, DELETE, OPTIONS"
    );
  next();
});
// CORS END
app.post("/api/posts", (req , res , next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message : 'Post added successfully '
  });

});

app.get('/api/posts' , (req , res , next) => {
  const posts = [
    {
      id: 'hsdgshd123',
      title: 'First server side post',
      content: 'This is content coming from server.'
    },
    {
      id: 'dfjshkshd1343',
      title: 'Second server side post',
      content: 'This is content coming from server!'
    }
  ];
  res.status(200).json({
    message : 'Posts fetched successfully!',
    posts : posts
  });
});

module.exports = app;
