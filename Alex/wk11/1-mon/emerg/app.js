var express = require('express');
var app = express();
const PORT = 8080;
var _ = require('lodash');

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Shut up and take my money",
  "It's almost beer o'clock",
  "The Force is strong with you"
]
var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]


app.get('/', function(req, res){
  var randomComp = _.sample(compliments)
  var randomCol = _.sample(colors)
  res.render('home', {
    randomComp: randomComp,
    randomCol: randomCol
  });
});

app.get('/:name', function(req, res){
  var randomComp = _.sample(compliments)
  var randomCol = _.sample(colors)
  var person = req.params.name;
  res.render('name', {
    person: person,
    randomComp: randomComp,
    randomCol: randomCol
  });
});

app.listen(PORT, function(){
  console.log(`listening on port ${PORT}`);
});