'use strict'
const describeCountry = function (country,population,capitalCity) { return `${country} has ${population} and tis capital is ${capitalCity}`}

const city1 = describeCountry('Brazil',244000000,'Brasilia');
const city2 = describeCountry('Russia',200000000,'Moscow');

console.log(city1,city2)

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  };

console.log(jonas.lastName);



const person = {
    name : 'Jonas',
    friends : ['Michael','Bob','Alex'],
    bestFriend : 'Michael',
    birthYear : 1998,
    driverLicense :false,
    calcAge : function () {
    this.age = 2038 - this.birthYear;
    return this.age;
    },
    getSummary : function(){
        return `${this.name} has as ${this.friends.length} friends, ${this.calcAge()} years old and he has ${this.driverLicense? 'a' : 'no'} driver's licence`
    } 
        
}

//console.log(`${person.name} has ${person.friends.length} friends, and his best friend is called ${person.friends[0]}`)

console.log(person.getSummary())

const funOfWor = function(population) {
    let percen = population / 7900 * 100;
    return `${percen.toFixed(2)}%`
}

console.log(funOfWor(1449));

const funOfWor2 = population => {
    let percen = population / 7900 * 100;
    return `${percen.toFixed(2)}%`
}

const describePopulation = function(country,population) {
    let per = funOfWor2(population);
    return `${country} and has ${per} people in the world.`
}

console.log(describePopulation('Brazil',225));

const populations = [1441,245,865,1025];
console.log(populations.length === 4);
const percentagens = [
    funOfWor(populations[0]),
    funOfWor(populations[1]),
    funOfWor(populations[2]),
    funOfWor(populations[3]),
]
console.log(percentagens);

const neighbours = ['Argentina','Chile','Bolivia','Venezuela'];

neighbours.push('Utopia');
console.log(neighbours);
//neighbours.pop(); remove last pop
//neighbours.unshift('Utopia') //add in the beginning
//neighbours.shift(); //remove first
//console.log(neighbours);

neighbours.includes('Germany') || console.log('Probaly not a european country');

console.log(neighbours.indexOf('Bolivia'));
neighbours[neighbours.indexOf('Bolivia')] = 'Republic of Sweden';
console.log(neighbours);

const myCountry = {
    country:'Brazil',
    capital:'Brasilia',
    language : 'portuguese',
    population : 245,
    neighbours : neighbours,
    describe() { console.log(`${this.country} has ${this.population} people`)},
    checkIsland () { this.neighbours > 0 ? this.IsIsland = true : this.IsIsland = false}
}
console.log(myCountry);
console.log(`${myCountry.country} has ${myCountry.population} million people, ${neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 3;
console.log(myCountry);
myCountry['population'] -= 2;
console.log(myCountry);

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

for (let i = 1;i <= 50;i++) {
    console.log(`people ${i} is voting`);
};

let percentagens2 = [];
for (let i = 0;i < populations.length;i++) {
    const percen = funOfWor(populations[i]);
    percentagens2.push(percen);
};

console.log(percentagens2);