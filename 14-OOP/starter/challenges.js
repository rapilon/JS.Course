'use strict'

'challenge 1'

const Car = function (make,speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.acceleration = function() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
}
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
} 

const bmw = new Car('BMW',120);
const mercedes = new Car('Mercedes',120);

console.log(bmw,mercedes);
bmw.acceleration();
mercedes.brake();

'challenge 2'

class Carcl {
    constructor(make,speed) {
        this.make = make;
        this.speed = speed;
    }

    acceleration() {
        this.speed += 10;
        console.log(`${this.make} going at ${this.speed} km/h`);
        return this;
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed} km/h`);
        return this
    }

    get speedUS(){
        return this.speed / 1.6
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
};

const ford = new Carcl('Ford',120);
console.log(ford);
ford.acceleration();
ford.speedUS = 50;
console.log(ford);

'challenge 3'

const EV = function(make,speed,charge) {
    Car.call(this, make,speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
};
EV.prototype.acceleration = function() {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};

const tesla = new EV('Tesla',120,23);
console.log(tesla);

tesla.acceleration();
tesla.brake();
tesla.chargeBattery(50);
console.log(tesla);

'challenge 4'

class EVCl extends Carcl {
    #charge;
    constructor(make,speed,charge){
        super(make,speed);
        this.#charge = charge;
    }

    acceleration() {
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }
}

const rivian = new EVCl('Rivian',120,23)
console.log(rivian.acceleration().brake().chargeBattery());
