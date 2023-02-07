'use strict'

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    printGoals : function(...players) {
     console.log(players);
     console.log(`The match has ${players.length} gols in total`);
    }
    };

const [players1, players2] = game.players;
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;

const allPlayers = [...players1, ...players2];
const player1Final = [...players1,'Thiago','Coutinho','Perisic'];

const {odds : {team1, x: draw, team2}} = game;

game.printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is likely to win');
team1 > team2 && console.log('Team 2 is likely to win');

'Challenge 2'

for (const [x,d] of game.scored.entries()) {
    console.log(`Goal number ${x+1} : ${d}`);
}

let odds = Object.values(game.odds);
let average = 0;
for (const odd of odds )average += odd;
 average /= odds.length;
console.log(average.toFixed(2));

const entries = Object.entries(game.odds);
console.log(entries);

for (let [team, odd] of entries) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
    console.log(`Odd of ${teamStr} : ${odd}`);
}

console.log(!!0 ? 'banana' : 'maçã');
// for (let [team, odd] of entries) {
//     if(team === 'team1') team ='victory Bayern Munich';
//     if(team === 'x') team = 'draw';
//     if(team === 'team2') team = 'victory Borussia'
//     console.log(`Odd of ${team} : ${odd}`);
// }

const scorers = {
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}


