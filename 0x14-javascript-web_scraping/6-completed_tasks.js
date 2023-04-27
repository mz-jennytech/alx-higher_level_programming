#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, function (error, response, body) {
  if (error) console.error(error);
  else {
    const todos = JSON.parse(body);
    const completed = {};

    for (const todo of todos) {
      if (todo.completed) {
        if (!completed[todo.userId]) completed[todo.userId] = 0;
        completed[todo.userId] += 1;
      }
    }
    console.log(completed);
  }
});
