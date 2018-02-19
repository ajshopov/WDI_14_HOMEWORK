var express = require('express');
var app = express();
const PORT = 8080;
var _ = require('lodash');

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Shut up and take my money",
  "It's almost beer o'clock",
  "The Force is strong with you"
  ]
  colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

  randomC = _.sample(compliments)

  res.render('home', {
    randomC: randomC
  });
});


app.listen(PORT, function(){
  console.log(`listening on port ${PORT}`);
});