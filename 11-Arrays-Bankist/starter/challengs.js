'use strict';

const J1 = [3, 5, 2, 12, 7];
const J2 = [9, 16, 6, 8, 3];
const K1 = [4, 1, 15, 8, 3];
const K2 = [10, 5, 6, 1, 4];

// const J1fixed = J1.slice(1, 3);
// const J2fixed = J2.slice(1, 3);


const checkDogs = function (julia, kate) {
    const J1fixed = julia.slice(1, 3);

  const fused = [...J1fixed, ...kate];
  const concatArrey = J1fixed.concat(kate);
  console.log(fused);
//   console.log(concatArrey);
//   console.log(J1fixed);

  fused.forEach(function (j, i) {
    const age = j >= 3 ? 'adult' : 'puppy';

    age === 'adult' ? console.log(`Dog number ${i + 1} is an ${age}, and is ${j} years old `) : console.log(`Dog number ${i + 1} is still a puppy, and has ${j} years old`);
  });  

//   console.log('--------Julia array--------');

//   julia.forEach(function (j, i) {
//     const age = j >= 3 ? 'adult' : 'puppy';

//     age === 'adult' ? console.log(`Dog number ${i + 1} is an ${age}, and is ${j} years old `) : console.log(`Dog number ${i + 1} is still a puppy, and has ${j} years old`);
//   });

//   console.log('-----------Kate array--------------');
//   kate.forEach(function (j, i) {
//     const age = j >= 3 ? 'adult' : 'puppy';

//     age === 'adult' ? console.log(`Dog number ${i + 1} is an ${age}, and is ${j} years old `) : console.log(`Dog number ${i + 1} is still a puppy, and has ${j} years old`);
//   });
};

checkDogs(J1,K1);


'challenge 2'

// const calcAverageHumanAge = function(ages) {
//   const humanAges = ages.map( dog => dog <= 2 ? dog *2 : dog * 4 + 16);
//   const humanages18 = humanAges.filter( dog => dog >= 18);
//   const oneNumber = humanages18.reduce(
//     (acc,value,i, arr) => acc + value / arr.length,0);
//   return oneNumber;
// };

const calcAverageHumanAge = ages =>
   ages
  .map(dog => (dog <= 2 ? dog *2 : dog * 4 + 16))
  .filter(dog => dog >= 18)
  .reduce((acc,value,i, arr) => acc + value / arr.length,0);

console.log(calcAverageHumanAge( [5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]
));

'challenge 4'

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
  ];

  dogs.forEach(dog => (dog.recFod = Math.trunc(dog.weight ** 0.75 * 28)));

  console.log(dogs);
//2
 const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
 console.log(dogSarah);
 console.log(`Sarah's dog is eating too ${dogSarah.recFod > dogSarah.curFood ? 'much' : 'little'}`);

//3
const ownerEatTooMuch = dogs
.filter(dog => dog.curFood > dog.recFod)
.flatMap(dog => dog.owners);

console.log(ownerEatTooMuch);
//4
const ownerEatTooLittle = dogs
.filter(dog => dog.curFood < dog.recFod)
.flatMap(dog => dog.owners);

console.log(`${ownerEatTooLittle.join(' and ')} dogs are eating too much abd ${ownerEatTooLittle.join(' and ')} are eating too little`);
//5
console.log(dogs.some(dog => dog.recFod == dog.curFood));

//6
const checkIfOkay = dog => dog.curFood > (dog.recFod * 0.9) && dog.curFood < (dog.recFod * 1.10);

console.log(dogs.some(checkIfOkay));

//7

const eatingOkay = dogs.filter(checkIfOkay);
console.log(eatingOkay);

//8
const dogsSorted = dogs.slice().sort((a,b) => a.recFod - b.recFod);
console.log(dogsSorted);