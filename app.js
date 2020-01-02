const fs = require('fs');

const genders = [
    'male',
    'female'
];

const maleNames = [
    'Tadeusz',
    'Michal',
    'Mateusz',
    'Kacper',
    'Rysiek'
];

const femaleNames = [
    'Kasia',
    'Basia',
    'Ola',
    'Jadzia',
    'Marlena'
];

const lastNames = [
    'Nowak',
    'Burak',
    'Kosiec',
    'Rubik',
    'Kowal'
];

const people = [];

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

for (i = 0; i < 20; i++) {
    const gender = randomChoice(genders);
    const lastName = randomChoice(lastNames);
    const age = Math.floor((Math.random() * 80) + 18);
    if(gender === 'female') {
        name = randomChoice(femaleNames);
    } else {
        name = randomChoice(maleNames);
    }
   people.push(gender, name, lastName, age);
  } 

  const jsonString = JSON.stringify(people);
  
fs.writeFile('people.json', jsonString, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
