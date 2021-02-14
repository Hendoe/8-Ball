//The Switch Code

let userName = 'Billy';

userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');

userQuestion = "Will I ever catch a break";

console.log(`You, ${userName}, asked ${userQuestion.toLowerCase()}, yes?`);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    console.log('It is certain');
    break;
  case 1:
    console.log('It is decidedly so');
    break;
  case 2:
    console.log('Reply hazy, try again');
    break;
  case 3:
    console.log('Cannot predict now');
    break;
  case 4:
    console.log('Do not count on it');
    break;
  case 5:
    console.log('My sources say no');
    break;
  case 6:
    console.log('The outlook... is not so good');
    break;
  case 7:
    console.log('All signs point to yes');
    break;
};

console.log(eightBall);

//The If Else Code

let userName = 'Ashley';

userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');

userQuestion = "Am I going to get lucky anytime soon";

console.log(`You, ${userName}, asked ${userQuestion.toLowerCase()}, yes?`);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

if (randomNumber === 0) {
  console.log('It is certain');
} else if (randomNumber === 1) {
  console.log('It is decidedly so');
} else if (randomNumber === 2) {
  console.log('Reply hazy, try again');
} else if (randomNumber === 3) {
  console.log('Cannot predict now');
} else if (randomNumber === 4) {
  console.log('Do not count on it');
} else if (randomNumber === 5) {
  console.log('My sources say no');
} else if (randomNumber === 6) {
  console.log('The outlook... is not so good');
} else if (randomNumber === 7) {
  console.log('All signs point to yes');
};

console.log(eightBall);