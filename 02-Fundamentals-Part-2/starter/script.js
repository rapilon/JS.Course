'use strict'

'challenge 01 ';

/* const calcAverage = (score1,score2,score3) => (score1 + score2 + score3) / 3; */

/* const checkWinner = function(avgDolphins,avgKoalas) {   const Dolphins = avgDolphins;
    const Koalas = avgKoalas;
    if (Dolphins >= 2 * Koalas) {
        return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
    } else if (Koalas >= 2 * Dolphins) {
        return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
  } else {
    return'no one wins';
}
   
} */

/* const mediad = calcAverage(85,54,71);
const mediak = calcAverage(65,54,49); */

 /* console.log(checkWinner(mediad,mediak)); */

 'challenge 2'

const calcTip = function (bill) {
return bill >= 50 && bill <= 300 ? bill *0.15 : bill*0.20    
} 
/*
console.log(calcTip(40));
const bills = [125,555,44]
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(tips)

const totals = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];
console.log(totals)  */

'challenge 3'

const Mark = {
    firstName : 'Mark',
    lastName : 'Miller',
    height : 1.69,
    mass : 78,
    calcBMI : function(){
     this.BMI = this.mass / this.height ** 2;
     return this.BMI;
    }
}
const John = {
    firstName : 'John',
    lastName : 'Smith',
    height : 1.95,
    mass : 92,
    calcBMI : function(){
     this.BMI = this.mass / this.height ** 2;
     return this.BMI;
    }
}

Mark.calcBMI() > John.calcBMI() ? console.log(`${Mark.firstName} (${Mark.calcBMI()}) is higher than ${John.firstName} (${John.calcBMI()})`) : console.log(`${John.firstName} (${John.calcBMI()}) is higher than ${Mark.firstName} (${Mark.calcBMI()})`);


'challenge 4'

const bills = [22,295,176,440,37,105,1100,86,52,74];
const tips = [];
const totals =[];

for(let i =0;i < bills.length  ;i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(tips)
console.log(totals)

const arre = [2,85,94,68,35,74,12]

const calcAverage = function(arr) {
    let med = 0;
    for(let i = 0;i < arr.length - 1;i++) {
        med += arr[i];
    }
    return  med / arr.length;
}

console.log(calcAverage(totals));