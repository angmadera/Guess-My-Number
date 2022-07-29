'use strict';

//manipulate value of dom node
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// //. is class selector, then the name of class
// console.log((document.querySelector('.guess').value = 23));

//multiple ways to do an event listener
//a function is also just a value
//function will not be called immediately, only soon as button is clicked
//usually whatever the user types is a string tyle

let score = 20;
let randomNum = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //why can I not console.log here?
  //what is the difference between textContent and value?
  //everything was correct, just prefix and profix decrement review

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!!!';
  } else if (guess === randomNum && score > 1) {
    document.querySelector('.message').textContent = 'CORRECT!';
    document.querySelector('.number').textContent = randomNum;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //need to specify a string that is a unit, these are inline styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess != randomNum && score > 1) {
    document.querySelector('.score').textContent = --score;
    document.querySelector('.message').textContent =
      guess > randomNum ? 'Too high!' : 'Too low!';
  } else if (guess != randomNum && score <= 1) {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent = 'You lost the game!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';

  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
