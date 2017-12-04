var ptv = {
  alamein: ['flinders street', 'richmond', 'east richmond', 'burnley', 'hawthorn', 'glenferrie'],
  glen_waverly: ['flagstaff', 'melbourne central', 'parliament', 'richmond', 'kooyong', 'tooronga'],
  sandringham: ['southern cross', 'richmond', 'south yarra', 'prahran', 'windsor']
}

var origin = 'southern cross';
var destination = 'glenferrie';
// var origin = prompt('Enter your origin');
// var destination = prompt('Enter your destination');
var start_train_line = '';
var end_train_line = '';

if (origin !== destination) {
  // Find the lines which the origin and destination are on
  for (var line in ptv) {
    // Find the origin line
    if (ptv[line].includes(origin)) {
      start_train_line = line;
      if (destination === 'richmond') {
        end_train_line = line;
        break;
      }
    }

    // Find th destination line
    if (ptv[line].includes(destination)) {
      end_train_line = line;
      if (origin === 'richmond') {
        start_train_line = line;
        break;
      }
    }
  }

  // Get start and end indices of stops
  var start_index = ptv[start_train_line].indexOf(origin);
  var end_index = ptv[end_train_line].indexOf(destination);
  var journeyArr = [];

  // If the origin and destination are on the same line
  if (start_train_line === end_train_line) {
    // If travelling from right to left
    if (start_index > end_index) {
      journeyArr.push(ptv[start_train_line].slice(end_index, start_index + 1).reverse());
    } else {
      journeyArr.push(ptv[start_train_line].slice(start_index, end_index + 1));
    }
  } else {
    // Get the index of the Richmond stops on the lines
    var line1_richmond_index = ptv[start_train_line].indexOf('richmond');
    var line2_richmond_index = ptv[end_train_line].indexOf('richmond');

    console.log('line1_richmond_index', line1_richmond_index);
    console.log('line2_richmond_index', line2_richmond_index);

    // Slice the sections of the lines
    if ((start_index < line1_richmond_index) && (line2_richmond_index < end_index)) {
      // Right Right
      var path1 = ptv[start_train_line].slice(start_index, line1_richmond_index);
      var path2 = ptv[end_train_line].slice(line2_richmond_index, end_index + 1);
    } else if ((start_index < line1_richmond_index) && (end_index < line2_richmond_index)) {
      // Right Left
      var path1 = ptv[start_train_line].slice(start_index, line1_richmond_index + 1);
      var path2 = ptv[end_train_line].slice(end_index, line2_richmond_index);
    } else if ((line1_richmond_index < start_index) && (end_index < line2_richmond_index)) {
      // Left Left
      var path1 = ptv[start_train_line].slice(line1_richmond_index, start_index + 1);
      var path2 = ptv[end_train_line].slice(end_index, line2_richmond_index);
    } else if ((line1_richmond_index < start_index) && (line2_richmond_index < end_index)) {
      // Left Right
      var path1 = ptv[start_train_line].slice(line1_richmond_index + 1, start_index + 1);
      var path2 = ptv[end_train_line].slice(line2_richmond_index, end_index + 1);
    }

    // If the lines are going backwards then reverse the order
    if (start_index > line1_richmond_index) { path1.reverse() }
    if (end_index < line2_richmond_index) { path2.reverse() }

    journeyArr.push(path1);
    journeyArr.push(path2);

    console.log('path1', path1);
    console.log('path2', path2);
  }

  // Reduces the array of arrays into a single level array
  journeyArr = journeyArr.reduce((prev,curr) => prev.concat(curr));
  console.log('journeyArr', journeyArr);

  // DEBUG
  console.log('start line', start_train_line);
  console.log('end line', end_train_line);

  console.log('start index', start_index);
  console.log('end index', end_index);


  // Print out to screen the output
  console.log('origin: ' + origin);
  console.log('destination: ' + destination);

  console.log(journeyArr.join(' -----> '));

  if (start_train_line === end_train_line) {
    var numStops = Math.abs(end_index - start_index);
  } else {
    var line1_stops = Math.abs(start_index - line1_richmond_index);
    var line2_stops = Math.abs(end_index - line2_richmond_index);
    var numStops = line1_stops + line2_stops;
  }
  console.log(numStops + ' stops total');
} else {
  console.log('Your origin and destination are the same!');
}