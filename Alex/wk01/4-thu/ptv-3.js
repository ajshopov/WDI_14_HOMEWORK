var findLine = function(station){
  for(var line in ptv){
    if(ptv[line].includes(station)){
      return ptv[line];
    }
  }
}

var checkForSameLine = function(line1, line2){
  var checker1 = line1.join();
  var checker2 = line2.join();
  return (checker1 == checker2);
}

var ptv = {
  alamein: ['Flinders', 'Richmond', 'East_Rich', 'Burnley', 'Hawthorn', 'Glenferrie'],
  glenWaverly: ['Flagstaff', 'Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  sandringham: ['Southern_X', 'Richmond', 'South_Yarra', 'Prahran', 'Windsor']
};
var origin = prompt('FROM:');
var destination = prompt('TO:');

var firstLine = findLine(origin);
var secondLine = findLine(destination);

var startingStation = firstLine.indexOf(origin);
var finishingStation = secondLine.indexOf(destination);

var transfer1 = firstLine.indexOf('Richmond');
var transfer2 = secondLine.indexOf('Richmond');

if(checkForSameLine(firstLine, secondLine)){ 
    if(startingStation > finishingStation){
      firstLine = firstLine.slice(0).reverse();
      startingStation = firstLine.indexOf(origin);
      finishingStation = firstLine.indexOf(destination);
    }
    var journey = firstLine.slice(startingStation, finishingStation+1);

} else {
    if(startingStation > transfer1){
      firstLine = firstLine.slice(0).reverse();
      startingStation = firstLine.indexOf(origin);
      transfer1 = firstLine.indexOf('Richmond');     
    }

    if(transfer2 > finishingStation){
      secondLine = secondLine.slice(0).reverse();
      transfer2 = secondLine.indexOf('Richmond');
      finishingStation = secondLine.indexOf(destination);
    }

    var tripA = firstLine.slice(startingStation, transfer1);
    var tripB = secondLine.slice(transfer2, finishingStation+1);
    var journey = tripA.concat(tripB);
}

console.log('~~~~TRIP PLANNER~~~~')
console.log('origin: '+ origin);
console.log ('destination: ' + destination);
console.log(journey.join(" --> "));
console.log((journey.length - 1) + ' stops total');