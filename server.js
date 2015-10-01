var express = require('express');
var app = express();

var port = process.env.PORT || 3000;


var Adjectives = function () {
  this.happy = true;
  this.mad = true;
  this.bored = true;
  this.stressed = true;
  this.quizical = true;
}

var adjective = new Adjectives();

var getRandomWord = function(obj) {
 var propArray = Object.keys(obj);
 var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
 return {word: randomProp};
}

app.get('/adjective', function(req, res) {
 res.json(getRandomWord(adjective));
});

app.get('/', function (req, res) {
  res.send('hello universe!');
});

app.listen(port, function() {
  console.log('server started on port' + port);
});
