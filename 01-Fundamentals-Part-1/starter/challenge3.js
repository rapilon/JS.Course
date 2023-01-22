const Dolphins = (96 + 108 + 89) / 3;
const Koalas = (88 + 91 + 110) / 3 ;

console.log(Dolphins);
console.log(Koalas);

if (Dolphins > Koalas && Dolphins >= 100 ) {
    console.log('Dolphins');
} else if (Koalas > Dolphins && Koalas >= 100) {
    console.log('Koalas');
} else if (Dolphins === Koalas) {
    console.log('Draw');
} else {
    console.log('No one wins the trophy')
}

const bill = 430;
let tip;

console.log(`The bill was ${bill}, the tip was ${bill >= 50 && bill <= 300 ? tip = bill *0.15 :tip = bill *0.20} and the total was ${tip + bill}`)

