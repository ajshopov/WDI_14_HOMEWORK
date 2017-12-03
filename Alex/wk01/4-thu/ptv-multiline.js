
var changeDirection = function(dep, arr, track){
      track = track.slice(0).reverse();
      dep = track.length - dep - 1;
      arr = track.length - arr -1;

      return [dep, arr, track];
}

var alamein = ['Flinders', 'Richmond', 'East_Rich', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenWaverly = ['Flagstaff', 'Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringham = ['Southern_X', 'Richmond', 'South_Yarra', 'Prahran', 'Windsor'];

var origin = prompt('FROM:');
var dest = prompt('TO:');


//check which line for origin
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

//console.log('beginning: ' + beg + ' trainline ' + line1);

//find destination line
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
//console.log('ending: ' + end + ' trainline ' + line2);

var checker1 = line1.join();
var checker2 = line2.join();

console.log(checker1);
console.log(checker2);
//check that lines are the same, if not, change var transfer to Richmond
if(checker1 == checker2){
    
      if(beg > end){
          var newDirection = changeDirection(beg, end, line1);
          beg = newDirection[0];
          end = newDirection[1];
          line1 = newDirection[2];
      }

      //slice array to trip 
      var trip = line1.slice(beg, end+1);
      console.log(trip);

} else {
      //set transfer for Richmond station
      var transfer1 = line1.indexOf('Richmond');
      var transfer2 = line2.indexOf('Richmond');

      if(beg > transfer1){
          var newDirection = changeDirection(beg, transfer1, line1);
          beg = newDirection[0];
          transfer1 = newDirection[1];
          line1 = newDirection[2];        
      }

      if(transfer2 > end){
          var newDirection = changeDirection(transfer2, end, line2);
          transfer2 = newDirection[0];
          end = newDirection[1];
          line2 = newDirection[2];
      }

      //slice both arrays for 2 trips and join
      var tripA = line1.slice(beg, transfer1);
      var tripB = line2.slice(transfer2, end+1);
      var trip = tripA.concat(tripB);
      console.log(trip);
}

//output results
console.log('~~~TRIP PLANNER~~~')
console.log('origin: '+ origin);
console.log ('destination: ' + dest);
console.log(trip.join(" --> "));
console.log((trip.length - 1) + ' stops total');

