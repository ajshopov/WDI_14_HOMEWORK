// Write a program that, given a number, 
// can find the sum of all the multiples
//  of 3 or 5 up to and including that number.

var number = process.argv[2];

console.log(multiples(number));

function multiples(num){
  arraySum = [];
  for (var i = 0; i <= num; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      arraySum.push(i);
    }
  }
  return arraySum.reduce((a, b) => a + b, 0);
}