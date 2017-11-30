

var alamein = ['Flinders', 'Richmond', 'East_Rich', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenWaverly = ['Flagstaff', 'Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringham = ['Southern_X', 'Richmond', 'South_Yarra', 'Prahran', 'Windsor'];

var origin = prompt('FROM:');
var dest = prompt('TO:');


//find origin in array, return index eg 3
//check which line it is in
var beg = alamein.indexOf(origin);
var line1 = alamein.slice(0);
  if(beg === -1){
    beg = glenWaverly.indexOf(origin);
    line1 = glenWaverly.slice(0);
  }
  if(beg === -1){
    beg = sandringham.indexOf(origin);
    line1 = sandringham.slice(0);
  }
console.log('beginning: ' + beg + ' trainline ' + line1);


//find dest in array, return index eg 1
var end = alamein.indexOf(dest);
var line2 = alamein.slice(0);
  if(end === -1){
    end = glenWaverly.indexOf(dest);
    line2 = glenWaverly.slice(0);
  }
  if(end === -1){
    end = sandringham.indexOf(dest);
    line2 = sandringham.slice(0);
  }
console.log('ending: ' + end + ' trainline ' + line2);
console.log(line1);
console.log(line2);

var checker1 = line1.join();
var checker2 = line2.join();

console.log(checker1);
console.log(checker2);
//check that lines are the same, if not, change var transfer to Richmond
if(checker1 == checker2){

    //if origin > dest, reverse eg so 1, 3
    if(beg > end){
      line1 = line1.slice(0).reverse();
          //reversed directions, reassign index
          var beg = line1.indexOf(origin);
          var end = line1.indexOf(dest);
          console.log(beg);
          console.log(end);
    }
    //slice array to trip
    var trip = line1.slice(beg, end+1);
    console.log(trip);


} else {
    //set transfer for Richmond station
    var transfer1 = line1.indexOf('Richmond');
    //console.log(transfer1);
    var transfer2 = line2.indexOf('Richmond');

        if(beg > transfer1){
          line1 = line1.slice(0).reverse();
          //reversed directions, reassign index
          var beg = line1.indexOf(origin);
          var transfer1 = line1.indexOf('Richmond');
          console.log(beg);
          console.log(transfer1)
        }

        if (transfer2 > end){
          line2 = line2.slice(0).reverse();
          //reversed directions, reassign index
          var end = line2.indexOf(dest);
          var transfer2 = line2.indexOf('Richmond');
          console.log(end);
          console.log(transfer2)
        }
        //slice both arrays for 2 trips
        var tripA = line1.slice(beg, transfer1);
        var tripB = line2.slice(transfer2, end+1);
        var trip = tripA.concat(tripB);
        console.log(trip);
  }


//slice array to new trip

// var trip = alamein.slice(beg, end+1);
// console.log(trip);

// length of trip -- total number of stops

//output results
console.log('TRIP PLANNER')
console.log('origin: '+ origin);
console.log ('destination: ' + dest);
console.log(trip.join(" --> "));
console.log((trip.length - 1) + ' stops total');



