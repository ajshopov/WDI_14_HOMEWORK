var city = process.argv[2];
var apiReq = 'http://api.openweathermap.org/data/2.5/weather?APPID=' + process.env.weather_api + '&q=' + city;

var request = require('request');
request(apiReq, function (error, response, body) {
  var body = JSON.parse(body);
  var temp = (body.main.temp - 273.15).toFixed(2);

  console.log(temp);
});