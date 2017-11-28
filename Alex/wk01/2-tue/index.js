//Part 1
console.log('Part 1');
var name = prompt('What is your name?');

console.log('Your name is ' + name);

//Part 2
console.log('Part 2');
var order = prompt('On the menu tonight: Steak, fruit salad, tofurkey, pork chops. What would you like?');

if (order === 'fruit salad' || order === 'tofurkey'){
  console.log('This cuisine is Vegan friendly');
} else {
  console.log('Vegans beware!');
}

//Part 3
console.log('Part 3');
var numberOfChildren = prompt('how many kids will you have?');
var partnersName = prompt('your partners name?');
var geographicLocation = prompt('where will you live?');
var jobTitle = prompt('what job will you have?');

console.log('You will be a ' + jobTitle + ' in ' + geographicLocation 
      + ', and married to ' + partnersName + ' with ' + numberOfChildren
      + ' kids.');

//Part 4
console.log('Part 4');
var d = new Date();
var currentYear = d.getFullYear();

var birthYear = prompt('What year were you born?');

var guess = currentYear - birthYear - 1;
var guess2 = guess + 1;
console.log('You are either ' + guess + ' or ' + guess2);

//Part 5
console.log('Part 5');
var currentAge = prompt('how old are you?');
var maxAge = 90;
var dailyIntake = 3;

var bananas = (maxAge - currentAge) * 365 * dailyIntake;

console.log('You will need ' + bananas + ' bananas to last you until the ripe old age of '
  + maxAge);

