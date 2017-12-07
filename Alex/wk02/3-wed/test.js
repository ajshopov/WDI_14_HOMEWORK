var savings = 50;
var checking = 50;

var withdraw = prompt('withdraw?');

if(withdraw > savings){
  var totalDollars = savings + checking;
    if(withdraw <= totalDollars){
      totalDollars = totalDollars - withdraw;
      savings = 0;
      checking = totalDollars;
    }
  } else {
  savings = savings - withdraw;
}

console.log(savings);
console.log(checking);