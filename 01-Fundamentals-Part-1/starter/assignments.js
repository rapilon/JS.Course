let country = 'Brasil';
let continent = 'South-America';
let population = 243455545;
let isIsland = false;
const language = 'portuguese'

console.log(country,continent,population,isIsland,language)

let Markmass = 78;
let MarkHeight = 1.88;
let Johnmass = 85;
let JohnHeight = 1.76;

let BMIMark = Markmass / MarkHeight ** 2; 
let BMIJohn = Johnmass / JohnHeight ** 2;

const markHigherBMI = BMIMark > BMIJohn;

if (markHigherBMI != false) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's!")
}

//opa

console.log(`John
is
a
father`);

// type conversion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(Number('Ramon'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + 'years old');//number to string
console.log('I am ' + '23' + 'years old'); //igual

console.log('23' - '10' - 3); // string to number
console.log('23' / '2'); // string to number

let u = '2' * 8;
console.log(u)

const half = 243455544 / 2;
const oneMore = 243455545 +1;
const description = `${country} is in South America, and its ${population} peoples speak ${language}`

console.log(description)
population = 13
if (population > 33000000) {
    console.log(`${country} is above average`)
} else {
    console.log(`Is not above averege`)
}

console.log('9' - '5'); //4
console.log('19' - '13' + '17');//617
console.log('19' - '13' + 17);//23
console.log('123' < 57);//false
console.log(5 + 6 + '4' + 9 - 4 - 2);//1143


