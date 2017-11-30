
var alamein = ['Flinders', 'Richmond', 'East', 'Burnley', 'Hawthorn', 'Glenferrie'];

var origin = prompt('FROM:');
var dest = prompt('TO:');

//find origin in array, return index eg 3
var beg = alamein.indexOf(origin);
console.log(beg);
//find dest in array, return index eg 1
var end = alamein.indexOf(dest);
console.log(end);

//if origin > dest, reverse eg so 1, 3
if(beg > end){
  alamein = alamein.slice(0).reverse();
      //reversed directions, reassign index
      var beg = alamein.indexOf(origin);
      var end = alamein.indexOf(dest);
      console.log(beg);
      console.log(end);
}

console.log(alamein);
//slice array to new trip

var trip = alamein.slice(beg, end+1);
console.log(trip);

// length of trip -- total number of stops

//output results
console.log('TRIP PLANNER')
console.log('origin: '+ origin);
console.log ('destination: ' + dest);
console.log(trip.join(" --> "));
console.log(trip.length + ' stops total');



