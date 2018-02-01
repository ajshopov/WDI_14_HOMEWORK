var gifCount = 0;
var searchWord = '';

$('.search').click(function(){
  searchWord = $('input').val();
  var options = {
    url: "http://api.giphy.com/v1/gifs/search?api_key=RpFanF963c1hiGd4b0MJ4E6RQ8OB62TL&limit=10&q=" + searchWord,
    method: 'get' //default
  };
  $('.container').children().remove();
  gifTime(options);
});

$(window).on('scroll', function(){
  if ($(window).scrollTop() > $(document).height() - 100 - $(window).height()) {
    var options = {
      url: "http://api.giphy.com/v1/gifs/search?api_key=RpFanF963c1hiGd4b0MJ4E6RQ8OB62TL&limit=10&offset=" + gifCount +"&q=" + searchWord,
      method: 'get'
    }
    console.log('scrolling')
    gifTime(options);
  }
});

function gifTime(options){
  gifCount = gifCount + 10;
  $.ajax(options).done(function(response){
    response.data.forEach(function(gif){
      var newGif = $('<img>').attr('src', gif.images.fixed_height.url);
      var newDivElem = $('<div>', {'class': 'gifs'});
      newDivElem.append(newGif);
      $('.container').append(newDivElem);
    });
  });
}
