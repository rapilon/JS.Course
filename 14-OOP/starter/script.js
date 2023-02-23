'use strict';

// const Person = function (firstName, birthYear) {
//   //Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //Never do this
//   // this.calcAge(console.log(2037 - this.birthYear));
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// //1. New {} is created
// //2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {}

// const jack = new Person('Jack', 1987);
// const matilda = new Person('Matilda', 2002);
// console.log(jack, matilda);

// //Static methods
// Person.hey = function () {
//   console.log(`Hey there!`);
//   console.log(this);
// };

// console.log(jonas instanceof Person);

// //Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(jack));
// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototypeOfLinkedObjects

// Person.prototype.species = 'Homo Sapiens';
// console.log(jack.species);

// console.log(jack.hasOwnProperty('firstName'));
// console.log(jack.hasOwnProperty('species'));

// //Object.prototype(top of prototype chain)
// console.log(jack.__proto__.__proto__);
// console.log(jack.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 5, 8]; // new Array === [];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

//ES6 Classes

//const PersonCl = class {}

//class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }
//   // Set a property that already exists
//   set fullname(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullname() {
//     return this._fullName;
//   }

//   //Static are not avaiable in instances
//   static hey = function () {
//     console.log(`Hey there!`);
//     console.log(this);
//   };
// }

// const jessica = new PersonCl('Jessica', 1996);

// //1. Classes are not hoisted
// //2. Classes are first-class citizes
// //3. Classes are executed in strict mode

// const account = {
//   owner: 'jonas',
//   movements: [200, 500, 120, 40],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// //Object.create

// // const Personproto = {
// //   calcAge() {
// //     console.log(2037 - this.birthYear);
// //   },

// //   init(firstName, birthYear) {
// //     this.birthYear = birthYear;
// //     this.firstName = firstName;
// //   },
// // };

// // const steven = Object.create(Personproto);
// console.log(steven);
// steven.name = 'Steven';

// const sarah = Object.create(Personproto);
// sarah.init('Sarah', 1979);

// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function() {
//     console.log(2022 - this.birthYear);
// }

// const Student = function(firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear);
//     this.course = course;
// };

// //Linking prototypes
// Student.prototype = Object.create(Person.prototype)

// Student.prototype.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.log(Student.prototype.constructor);


// //Inherence between 'Classes
// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//    //Always needs to heppen first
//    super(fullName, birthYear);
//    this.course = course;
//   }

//   introduce() {
//     console.log(`Hey ${this.fullName}`);
//   }
// };

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();

// //Inherence 

// const Personproto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.birthYear = birthYear;
//     this.firstName = firstName;
//   },
// };


// const StudentProto = Object.create(Personproto);
// StudentProto.init = function (firstName, birthYear, course) {
//   Personproto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function() {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay',2010, 'Computer science')
// jay.introduce();

class Account {
  //Public fields (instances)
locale = navigator.language;
  //Private fields (instances)
  #pin;
  #movements = [];
  
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protected property
     this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //Public interface
  //Public methods
  getMovements() {
    return this.#movements
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val){
    this.deposit(-val);
    return this;
  }

  

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  //4 private methods
  _approveLoan(val){
    return true;
  }
}

const acc1 = new Account('Ramon', 'BRL', 1010);

//acc1._movements.push(150)
acc1.deposit(250);
acc1.withdraw(-150);

console.log(acc1);
console.log(acc1.pin);
// console.log(acc1.#movements);