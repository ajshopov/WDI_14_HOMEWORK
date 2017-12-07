var balance1 = document.querySelector('.balance1');
var input1 = document.querySelector('.input1');
var deposit1 = document.querySelector('.deposit1');
var withdraw1 = document.querySelector('.withdraw1');

var balance2 = document.querySelector('.balance2');
var input2 = document.querySelector('.input2');
var deposit2 = document.querySelector('.deposit2');
var withdraw2 = document.querySelector('.withdraw2');

var box1 = document.querySelector('.box1');
var box2 = document.querySelector('.box2');


function depSaving(){
  var total = Number(balance1.textContent) + Number(input1.value);
  balance1.textContent = total;
  box1.classList.remove('zero');
}

function depChecking(){
  var total = Number(balance2.textContent) + Number(input2.value);
  balance2.textContent = total;
  box2.classList.remove('zero');
}

function withSaving(){
  var total = Number(balance1.textContent) - Number(input1.value);
  if(total < 0){
    return;
  } else if (total === 0) {
    balance1.textContent = total;
    box1.classList.add('zero');
  } else {
    balance1.textContent = total;
  }
}

function withChecking(){
  var total = Number(balance2.textContent) - Number(input2.value);
  if(total < 0){
    return;
  } else if (total === 0){
    balance2.textContent = total;
    box2.classList.add('zero');
  } else {
    balance2.textContent = total;
  }
}


deposit1.addEventListener('click', depSaving);
deposit2.addEventListener('click', depChecking);
withdraw1.addEventListener('click', withSaving);
withdraw2.addEventListener('click', withChecking);
