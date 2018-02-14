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

