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