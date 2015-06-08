'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/'));

var Adjective = function() {
  this.sleepy = true;
  this.fuzzy = true;
  this.cranky = true;
  this.soporific = true;
  this.lazy = true;
  this.penultimate = true;
  this.geodesic = true;
  this.superb = true;
  this.tasty = true;
  this.intense = true;
  this.magnificent = true;
  this.eloquent = true;
};
var adjective = new Adjective();

var Verb = function() {
  this.sleeping = true;
  this.skiing = true;
  this.flopped = true;
  this.waiting = true;
  this.plotting = true;
  this.burping = true;
  this.sneezing = true;
  this.flying = true;
  this.snoozing = true;
  this.dancing = true;
};
var verb = new Verb();

var Noun = function() {
  this.ninjas = true;
  this.cowboys = true;
  this.bears = true;
  this.beats = true;
  this.alligators = true;
  this.hamsters = true;
  this.otters = true;
  this.helicopters = true;
  this.unicorns = true;
  this.rhymes = true;
};
var noun = new Noun();

function getRandomWord (object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  return {word: randomProp};
}

app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective));
});

app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});

app.get('/noun', function(req, res) {
  res.json(getRandomWord(noun));
});

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(port, function() {
  console.log('server starting. available at http://localhost:' + port);
});

// app.get('/', function(req, res) {
//   res.send('hello, universe');
// });