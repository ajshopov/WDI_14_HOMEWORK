var cities = ['NYC', 'SF', 'LA', 'SYD', 'ATX'];

var dropDownBox = document.getElementById("city-type");

for (var i = 0; i < cities.length; i++) {
  var option = document.createElement("option");
  option.text = cities[i];
  dropDownBox.add(option);
}

dropDownBox.addEventListener('change', changeBackground)

function changeBackground() {
  var choice = dropDownBox.selectedIndex;
  var city = dropDownBox.options[choice].text;

  switch (city){
    case 'NYC':
      document.body.className = "";
      document.body.classList.add('nyc');
      break;
    case 'SF':
      document.body.className = "";
      document.body.classList.add('sf');
      break;
    case 'LA':
      document.body.className = "";
      document.body.classList.add('la');
      break;
    case 'SYD':
      document.body.className = "";
      document.body.classList.add('sydney');
      break;
    case 'ATX':
      document.body.className = "";
      document.body.classList.add('austin');
      break;
  }
}
