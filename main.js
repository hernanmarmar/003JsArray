let hobbies = ['Reading', 'Coding', 'Run'];
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let groceryList = ['bread', 'tomatoes', 'milk'];
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
const chores = ['wash dishes', 'do laundry', 'take out trash'];
const groceryListLast = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
//nested Array
const numberClusters = [[1,2],[3,4],[5,6]];
//console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);
console.log(hobbies);
groceryList[1]='avocados';
condiments[0]='Mayo';
chores.push('go out the dog', 'wash skirt');
console.log(chores);
//borra primmer elemento
groceryList.shift();
console.log(groceryList);
//inserta en el primer elemento
groceryList.unshift('popcorn');
console.log(groceryList);
//.slice  lista determinados elementos pos-ini  pos-fin   
console.log(groceryList.slice(1,4));
//indexof  recupera el indice del arreglo donde queda el contenido que se esta buscando.
const pastaIndex = groceryListLast.indexOf('pasta');
console.log(pastaIndex);
//elmento 6 de numberCluster
const target = numberClusters[2][1];

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 0; counter < 4; counter++){
    console.log(counter);
  };

  for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  } ; 

  const vacationSpots = ['Bali', 'Paris', 'Tulum'];

  // Write your code below
  for (let i=0 ; i < vacationSpots.length ; i++) {
    console.log('I would love to visit ' + vacationSpots[i]);
  };  

  let friends = ['a','b'];
let bobsFollowers = ['s1','s2','s3','s4'];
let tinasFollowers = ['s1','s2','tf3'];
let mutualFollowers= [];

for (let i=0 ; i < bobsFollowers.length ; i++) {
  for ( let j=0; j < tinasFollowers.length ; j++) {
    if (bobsFollowers[i]===tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[j]);
    }
  }
};

const cards = ['diamond', 'spade', 'heart', 'club'];
for (const cardsItems of cards) {
    console.log(`cartas de ${cardsItems}`)
 }

// Write your code below
let currentCard;
while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
};

let cupsOfSugarNeeded = 13;
let cupsAdded = 0;

do {
cupsAdded +=1;
console.log('sugar add ' + cupsAdded)
} while ( cupsAdded < cupsOfSugarNeeded);

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");
