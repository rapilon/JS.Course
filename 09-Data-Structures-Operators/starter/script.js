'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon','tue','wed','thu','fri','sat','sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
    //ES6 enchanced object literals
    openingHours,

  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
     will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here's your delicious pasta with ${ing1},${ing2} and ${ing3}`);
  },

  orderPizza(mainIngre, ...otherIngre) {
    console.log(mainIngre);
    console.log(otherIngre);
  }
};

//Property names
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `We are open on ${properties.length} days : `;

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day},`;
// }
// console.log(openStr);

// //Property values
// const values = Object.values(openingHours);
// console.log(values);

// //Entire object
// const entries = Object.entries(openingHours);
// //console.log(entries);


//or [key, value] onde o objeto é simples e só tem 1 valor
// for (const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// //Optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// //Example
// const days = ['mon','tue','wed','thu','fri','sat','sun'];

// for(const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// //Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderRissoto?.(0,1) ?? 'Method does not exist');

// //Array
// const users = [
//   {name : 'Ramon', email: 'ramonbrx98@hotmail.com'}
// ];

// console.log(users[0]?.name ?? 'User array empty');
//For of 
// const menu = [...restaurant.starterMenu,...restaurant.mainMenu];

// for(const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// const rest1 = {
//   name:'Capri',
//   numGuests: 0
// };
// const rest2 = {
//   name:'La Pizza',
//   owner : 'Giovanni Salvatore'
// };

// //OR assigment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// rest2.numGuests ||= 10;

// //nulish assigment operator (null or undefined)
// rest1.numGuests ??= 10;


// //AND 
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= 'ANONYMOUS';
// rest2.owner &&= 'ANONYMOUS';

// console.log(rest1);
// console.log(rest2);

// //nulish : null and undefined
// //const guest2 = restaurant.numGuests ?? 10;
// //console.log(guest2);

// //SHORT CIRCUITING && ||
// // USe any data type, return any data type
// console.log(28 || 'Ramon');
// console.log('' || 'Ramon'); //falsy
// console.log(true || 0);
// console.log(undefined || null); //falsy and falsy

// console.log(undefined || ''|| 0 || 'Hello' || 23);

// restaurant.numGuests = 23;

// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);
// //OR

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log('------AND-------');
// console.log(0 && 'Ramon');
// console.log(7 && 'Ramon');

// console.log('Hello' && 23 && null && 'Ramon');

// //Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// //Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for(let i =0; i < numbers.length; i++) sum += numbers[i]; 
//   console.log(sum);
// }

// add(2,3);
// add(5,3,7,2);
// add(8,2,4,6,7,9,2,3);

// const x = [23,7,5];
// add(...x);

// restaurant.orderPizza('Mussarela', 'Molho', 'Azeitonas', 'Tomate');

// //Destructuring
// //SPREAD, right side of =
// const array = [1, 2, ...[3, 4]];

// //REST, left side of =
// const [d,e, ...others] = [1, 2, 3, 4, 5];

// const arre = [7, 8, 9];
// const badNewArr = [1,2, arre[0], arre[1], arre[2]];
// console.log(badNewArr);

// const goodNewArr = [1,2, ...arre];
// console.log(goodNewArr);

// console.log(...goodNewArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy array;
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 arrays;
// const merged = [...restaurant.mainMenu,...restaurant.starterMenu];

// const str = 'Ramon';
// const letters = [...str, '', 'P.'];
// console.log(letters);
// console.log(...str);
// //console.log(`${...str} Pilon`);// erro


// //Real world example
// // const ingredients = [prompt('Let\s make pasta! Ingredient 1 ?'), prompt('Ingredient 2?'), prompt('Ingredient 3 ?')];
// // console.log(ingredients);

// // restaurant.orderPasta(...ingredients);

// //Objects
// const newRestaurant = {foundIn:1998,...restaurant, founder : 'Giuseppe'}
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// //destructuring
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// //Switching variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //Receive 2 return values from a function;
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Nested destructuring;
// const nested = [2, 4, [5, 6]];
// // const [i, ,j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values;
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// //Object destructuring;

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variables;
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// //Nested objects;
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
