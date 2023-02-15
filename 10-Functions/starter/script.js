'use strict';


//Defaltu values
// const booking =[];

// const airplane = function(flight,
//     passangers = 1,
//     price= 1.2 * passangers) {
//     //ES5
//     //passengers = 1;
//     //price = 500;

//     const bookings = {
//         flight,
//         passangers,
//         price
//     }
//     console.log(booking);
//     booking.push(bookings)

//     }
    
//     airplane('AU65',7)
//     airplane('AU65',8,500)
//     airplane('AU65',2)
//     airplane('AU65',9,600)

    //Primitive e reference

    // const flight = 'LU98';
    // const ramon = {
    //     name:'Ramon',
    //     passaport : 891516191
    // }

    // const checkIn = function(flightNum, passenger) {
    //     flightNum = 'OP891';
    //     passenger.name = 'Mr.' + passenger.name;

    //     if(passenger.passaport === 891516191) {
    //         alert('Checkd in');
    //     } else {alert('Wrong passaport')}
    // }

    // checkIn(flight,ramon);
    // console.log(flight);
    // console.log(ramon);

    // const newPass = function(passenger) {
    //     passenger.passaport = Math.trunc(Math.random() * 1000000);
    // }

    // newPass(ramon);
    // checkIn(flight,ramon);

    //Functions accepting callback functions
    // const oneWord = function(str) {
    //     return str.replaceAll(' ','').toLowerCase();
    // }

    // const upperWord = function(str) {
    //     const [first, ...others] = str.split(' ')
    //     return [first.toUpperCase(), ...others].join(' ');
    // }

    // //High order function
    // const transform = function(str, fn) {
    //     console.log(`Original : ${str}`);
    //     console.log(`Transformed ${fn(str)}`);
    //     console.log(`Transformed by ${fn.name}`);
    // }

    // transform('Ramon Pilon',oneWord);
    // transform('Ramon Pilon',upperWord);

    // //JS uses callbacks all the time
    // const high5 = function() {
    //     console.log("Opa 👌");
    // }

    // document.body.addEventListener('click', high5);

    // const atack = function(command) {
    //     return `${command} ! carai`;
    // };

    // const defend = function(command) {
    //     return `${command} ! carai`;
    // };

    // const commandP = function(command, type) {
    //     console.log(`O comando foi ${command} = ${type(command)}`);

    //     console.log(`Feito por ${type.name}`);
    // }

    // commandP('atacar',atack);
    // commandP('defender',defend);

//Function returning functions    
// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting},${name}`);
//     }
// }

//  const greet = greeting => name => console.log(`${greeting}, ${name}`);

// const greetHey = greet('Hey');

// greetHey('Ramon');
// greet('Opa')('Eae maninho');

//Call and Apply
// const lufthansa = {
//     airline : 'Lufthansa',
//     iataCode : 'LH',
//     bookings : [],
//     book(flightNum, name) {
//         console.log(
//             `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//         );
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})

//     }
// };

// lufthansa.book(238, 'Jessica Jones');
// lufthansa.book(242, 'John Smith');
// console.log(lufthansa);

// const eurowings ={
//     airline : 'Eurowings',
//     iataCode : 'EW',
//     bookings : []
// }

// const book = lufthansa.book;

// //Does not work
// //book(23 ,'Sarah');

// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode : 'LX',
//     bookings : [],
// };

// book.call(swiss, 48, 'Ramon Santos');
// console.log(swiss);

// //Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss,...flightData);

// //Bind

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookSW = book.bind(swiss);

// bookEW(23, 'Steven');
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonathan Joestar');

// //With eventlisteners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//     console.log(this);

//     this.planes++;
//     console.log(this.planes);
// }
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// //Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1,));

// const addVat = addTax.bind(null, 0.23);
// //addVat = value + value * 0.23;

// const addTax2 = (rate) => (value) => console.log(`${value + value * rate}`);

// const addTax3 = addTax2(0.23);

// addTax3(100);
// addTax3(250);
// addTax3(500);

const runOnce = function() {
    console.log('This will never run again');
}
runOnce();

//IIFE
(function() {
    console.log('This will never run again');
    const isPrivate = 23;
})

console.log(isPrivate);

(() => console.log('This will ALSO never run again'))
();