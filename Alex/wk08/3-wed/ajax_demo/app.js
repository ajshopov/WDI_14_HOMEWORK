

$('button').click(function () {
  var search = $('input').val()

  var options = {
    url: 'http://www.omdbapi.com/?apikey=2f6435d9&s=' +search,
    method: 'get' //default
  };

  $('.container').children().remove();

  // $.ajax(options).done(function(response){ console.log(response)});

  $.ajax(options).done(function(response){
    response.Search.forEach(function(movie){

      var newDivElem = $('<div>', {'class': 'movie-card'});
      var newLink = $('<a>').attr({'href': 'http://www.imdb.com/title/' + movie.imdbID, 'target': '_blank'});
      var newMovie = $('<h2>').text(movie.Title + ' (' + movie.Year + ')');
      var newPoster = $('<img>').attr('src', movie.Poster);
      var headLink = newLink.append(newPoster);
      newDivElem.append(newMovie).append(headLink);
      $('.container').append(newDivElem);
    });
  });
});






// var fruits = ['apple', 'lemon', 'banana'];

// //for loop
// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// //forEach
// fruits.forEach(function(elem){
//   console.log(elem);
// });


// //making a forEach... it is just a for loop
// function myForEach (arr, fn){
//   for (var i = 0; i < arr.length; i++) {
//     fn(arr[i]);
//   }
// };
// //compare with above
// myForEach(fruits, function(item){
//   console.log(item);
// });




