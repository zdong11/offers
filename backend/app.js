const express = require('express');

const app = express();

app.use('/api/posts' , (req , res , next) => {
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
    messages : 'Posts fetched successfully!',
    posts : posts
  });
});

module.exports = app;
