console.log(typeof "potato");
// Prediction: string
// Actual: string

console.log(typeof 15);
// Prediction: integer
// Actual: number

console.log(typeof 5.5);
// Prediction: number
// Actual: number

console.log(typeof NaN);
// Prediction: NaN
// Actual: number

console.log(typeof "hello");
// Prediction: string
// Actual: string

console.log(typeof true);
// Prediction: boolean
// Actual: boolean

console.log(typeof 1 != 2);
// Prediction: boolean
// Actual: true

console.log("hamburger" + "s");
// Prediction: hamburgers
// Actual: hamburgers

console.log("hamburgers" - "s");
// Prediction: hamburger
// Actual: NaN

console.log("1" + "3");
// Prediction: 13
// Actual: 13

console.log("1" - "3");
// Prediction: NaN
// Actual: -2

console.log("johnny" + 5);
// Prediction: johnny5
// Actual: johnny5

console.log("johnny" - 5);
// Prediction: NaN
// Actual: NaN

console.log(99 * "luftbaloons");
// Prediction: NaN
// Actual: NaN


// Add an element to the back of an array.
// push()

// Remove an element from the back of an array.
// pop()

// Add an element to the front of an array.
// unshift()

// Remove an element from the front of an array.
// shift()

// Concatenates all the elements in an array into a string.
// join()

// Separates the characters of a string into an array. This one is a string method.
// split()

var numbers = [2, 4, 6, 8]
numbers.pop()
numbers.push(10)
numbers.unshift(3)

// guess [3, 2, 4, 6, 10]
console.log(numbers)

var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ")
console.log(moreMorse.split(" "));

// guess ['dot', 'dash', 'pause', 'dash', 'dot']

var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles)
bands.unshift(stones)
bands[bands.length - 1].pop()
bands[0].shift()
bands[1][3] = "Ringo"

// [["Mick", "Keith", "Ronnie", "Charlie"],["Paul", "John", "George", "Ringo"]]



// a | b | a AND b
// true  true   true
// true  false  false
// false true   false
// false false  false

// a | b | a OR b
// true  true  true
// true  false true
// false true  true
// false false false

// a | b | a != b
// 3 3  false
// 1 5  true
// 2 "2"  false

// a | b |    !a && (a || b)
// true  true  -- false && (true || true) -- false && true => false
// true  false -- false && (true || false) -- false && true => false
// false true --  true && (false || true) -- true && true => true
// false false -- true && (false || false) -- true && false => false


// Conditionals
// You're a bouncer at a bar. Given an age variable, create a conditional that satisfies the following requirements...

// If a patron is older than 21, print out "Come on in!".
// If a patron is between 18 and 21, print out "Come on in (but no drinking)!".
// If a patron is younger than 18, print out "You're too young to be in here!".
// If a patron is older than 75, print out "Are you sure you want to be here?".

function bouncerChat(age, hasId){
  if (hasId) {
    if (age < 18) {
      return "You're too young to be in here!";
    } else if (age >= 18 && age <= 21){
      return "Come on in (but no drinking)!";
    } else if (age >= 75){
      return "Are you sure you want to be here?"
    } else {
      return "Come on in!"
    }
  } else {
    return "No ID, no entry."
  }
}





