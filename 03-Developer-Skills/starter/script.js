// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '23';
console.log('Hello');

// const measureKelvin = function() {
//     const measurement = {
//         type:'temp',
//         unit:'celsius',
//         value: prompt('Degree celsius:'),
//     }
//     const kelvin = measurement.value + 273
//     return kelvin;
// }
// console.log(measureKelvin());

('challenge 01');

const data1 = [17, 21, 'error', 23,undefined];
const data2 = [12, 5, -5,true, 0, 4,null];

const printForecast = function (arr) {
    let str = '';
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') continue;
     str = str +`${arr[i]}Cº in ${i+1} days....`;
  }
  console.log(str);
};

printForecast(data1);
printForecast(data2);
