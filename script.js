// script.js

// Importa le funzioni necessarie
import { getRandomAndRemove, getRandomIncrement } from './function.js';

// Array partecipanti torneo
const fighters = [
  {
    name: 'Freezer',
    power: 8000,
  },
  {
    name: 'Vegeta',
    power: 8500,
  },
  {
    name: 'Crilin',
    power: 500,
  },
  {
    name: 'Mr Satan',
    power: 50,
  },
  {
    name: 'Junior',
    power: 6000,
  },
  {
    name: 'Goku',
    power: 9001,
  },
  {
    name: 'Tensing',
    power: 450,
  },
  {
    name: 'Videl',
    power: 300,
  },
  {
    name: 'Bulma',
    power: 20,
  },

  {
    name: 'C-18',
    power: 7800,
  },
  {
    name: 'Gohan',
    power: 8900,
  },
  {
    name: 'Trunks',
    power: 1250,
  },
];

//   Array Armi
const weapons = [
  {
    name: 'Ventaglio della Musa',
    power: 15,
  },
  {
    name: 'Scouter',
    power: 30,
  },
  {
    name: 'Bastone Roshi',
    power: 60,
  },
  {
    name: 'Fagioli Magici',
    power: 70,
  },
  {
    name: 'Katana di Yajirobei',
    power: 85,
  },
  {
    name: 'Spada del Dragone Azzurro',
    power: 115,
  },
  {
    name: 'Armatura Saiyan',
    power: 145,
  },
  {
    name: 'Cannone da braccio',
    power: 170,
  },
  {
    name: "Nuvola d'oro",
    power: 200,
  },
  {
    name: 'Bastone Nyoi',
    power: 220,
  },
  {
    name: 'Spada Z',
    power: 235,
  },
  {
    name: 'Orecchini Potara',
    power: 250,
  },
];

console.log('Il torneo Boolkaichi ha inizio ogni combattente sceglie un arma');
console.log('-----------');

// Ogni combattente sceglie un arma casualmente
fighters.forEach((fighter) => {
  if (weapons.length > 0) {
    fighter.weapon = getRandomAndRemove(weapons);
    fighter.totalPower = fighter.power + fighter.weapon.power;
    console.log(
      `${fighter.name} ha scelto ${fighter.weapon.name} con potenza ${fighter.weapon.power}`
    );

    console.log(
      `${fighter.name} ha una potenza totale di ${fighter.totalPower}`
    );

    console.log('-----------');
  } else {
    fighter.weapon = { name: 'Nessuna arma disponibile', power: 0 };
    fighter.totalPower = fighter.power;
  }
});

// Ogni combattente si sottoporrà ad un allenamento che incrementerà la sua potenza
console.log('Ogni combattente si sta sottoponendo ad un allenamento');
console.log('-----------');

fighters.forEach((fighter) => {
  let training = getRandomIncrement();
  fighter.totalPower = training + fighter.totalPower;

  console.log(
    `${fighter.name} si è sottoposto ad un allenamento che ha aumentato di ${training} la sua potenza e ora ha una potenza totale di ${fighter.totalPower}`
  );
  console.log('-----------');
});

// Chi si qualifica al torneo deve avere una potenza di almeno 2000
console.log(
  'Vediamo chi è riuscito a qualificarsi alle fasi finali del torneo'
);
console.log('-----------');

// Creiamo un nuovo array con i combattenti con una forza superiore a 2000
const qualifiedFighters = fighters.filter(
  (fighter) => fighter.totalPower > 2000
);

qualifiedFighters.forEach((fighter) => {
  console.log(`${fighter.name} si è qualificato alla fase finale`);
  console.log('-----------');
});

// Aggiunta combattente "Robot" se il numero di qualificati è dispari
if (qualifiedFighters.length % 2 !== 0) {
  console.log("Numero dispari di qualificati: aggiungiamo un 'Robot'");
  qualifiedFighters.push({
    name: 'Robot',
    power: 4000,
    weapon: { name: 'Nessuna arma', power: 0 },
    totalPower: 4000,
  });
}

// Scontri tra i qualificati
console.log('Iniziano i combattimenti: vediamo chi vincerà!');
console.log('-----------');

// 1. Inizializzare array dei vincitori
let winners = [];

// 2. Aggiungere i vincitori degli scontri
for (let i = 0; i < qualifiedFighters.length; i += 2) {
  const fighter1 = qualifiedFighters[i];
  const fighter2 = qualifiedFighters[i + 1];

  console.log(
    `Scontro tra ${fighter1.name} (Potenza: ${fighter1.totalPower}) e ${fighter2.name} (Potenza: ${fighter2.totalPower})`
  );

  let winner;
  if (fighter1.totalPower > fighter2.totalPower) {
    winner = fighter1;
  } else if (fighter2.totalPower > fighter1.totalPower) {
    winner = fighter2;
  } else {
    // Parità: vince chi viene prima
    winner = fighter1;
  }

  winners.push(winner); // Aggiungi il vincitore all'array dei vincitori

  console.log(`Vince ${winner.name} con una potenza di ${winner.totalPower}`);
  console.log('-----------');
}

// 3. Ordinare i vincitori in ordine decrescente di potenza
winners.sort((a, b) => b.totalPower - a.totalPower);

// 4. Selezionare i primi 3 vincitori per il podio
const top3 = winners.slice(0, 3);

// 5. Premiazione: Annunciare il podio
console.log('-----------');
console.log('Premiazione del torneo:');
console.log('-----------');
console.log(
  `🏅 **1° posto:** ${top3[0].name} con una potenza di ${top3[0].totalPower}`
);
console.log(
  `🥈 **2° posto:** ${top3[1].name} con una potenza di ${top3[1].totalPower}`
);
console.log(
  `🥉 **3° posto:** ${top3[2].name} con una potenza di ${top3[2].totalPower}`
);
