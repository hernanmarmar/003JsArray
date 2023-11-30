let carro = {
    color : 'azul',
    combustible: 'gasolina'
}

console.log(carro);
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  // Write your code below
  let crewCount = spaceship.numCrew;
  let planetArray = spaceship.flightPath;

  for(const plante of planetArray){
    console.log(plante);
  }

  let spaceship1 = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  // Write your code below
  
  let isActive = spaceship1[propName];
  console.log(isActive);

  let spaceship2 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  // Write your code below
  spaceship2.color='glorious gold';
  spaceship2.numEngines=4;
  console.log(spaceship2);
  delete spaceship2['Secret Mission'];
  /*Las propiedades de objetos no se puedes listar asi
  for(const propiedad of spaceship2) {
    console.log(`propiedades de spaceship ${propiedad}`);
  }*/
  //metodos
  let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
let alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};
alienShip.retreat();
alienShip.takeOff();

let spaceship3 = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 
let capFave = spaceship3.crew.captain['favorite foods'][0];
spaceship3.passengers=[{'game':'chess'}];
let firstPassenger=spaceship3.passengers[0];
console.log(spaceship3);

let spaceship4 = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = obj => {
obj['Fuel Type']='avocado oil';
}

let remotelyDisable = obj => {
  obj.disabled = true;
}
console.log(spaceship4);
greenEnergy(spaceship4);
console.log(spaceship4);
remotelyDisable(spaceship4);
console.log(spaceship4);

let spaceship5 = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 


// Write your code below
for (let roles in spaceship5.crew) {
console.log(`${roles}:${spaceship5.crew[roles].name} ${spaceship5.crew[roles].degree}`);
}
// THIS
const robot = {
  model : '1E78V2',
  energyLevel : 100,
  provideInfo () {
  return `I am ${this.model} and my current energy level is ${this.energyLevel}`
  } 
 };
 
 console.log(robot.provideInfo());

 const robot1 = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel () {
   if (typeof this._energyLevel === 'number'){
    return `My current energy level is ${this._energyLevel}`
   } else {
    return "System malfunction: cannot retrieve energy level"
   }
  }
};
console.log(robot1.energyLevel);


const robot2 = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors (num) {
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  } 
  
};
console.log(robot2);
robot2.numOfSensors=100;

console.log(robot2.numOfSensors);


//constructor
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
};
const tinCan = robotFactory ('P-500',true);
console.log(tinCan);
tinCan.beep();

//constructor corto  shorthand technique
const robotFactory1 = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory1('P-501', false);
console.log(newRobot.model);
console.log(newRobot.mobile);

/*There are different ways to use object destructuring: 
one way is the property value shorthand and another is destructured assignment. */
const robot3 = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robot3;
console.log(functionality);
functionality.beep();

//Object.key  Object.entries  Object.assign
const robot4 = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot4);

console.log(robotKeys);

// Declare robotEntries below this line:

const robotEntries = Object.entries(robot4);
console.log(robotEntries);

// Declare newRobot below this line:

const newRobot1 = Object.assign({laserBlaster:true, voiceRecognition:true}, robot4);
console.log(newRobot1);

//las funciones flecha no se utiliza this. para el objeto
// Usando una función flecha como método
const obj1 = {
  propiedad: 'valor',
  metodo: () => {
      console.log(this.propiedad); // 'undefined' porque las funciones flecha no tienen su propio 'this'
  }
};

// Usando una expresión de función regular como método
const obj2 = {
  propiedad: 'valor',
  metodo: function() {
      console.log(this.propiedad); // 'valor' porque las funciones regulares tienen su propio 'this'
  }
};

obj1.metodo(); // Salida: undefined
obj2.metodo(); // Salida: valor

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

// Write your code below

isTwoPlusTwo();
console.log(isTwoPlusTwo.name);

const addTwo = num => {
  return num + 2;
}

//call back functions
const checkConsistentOutput = (func, val) => {
let checkA =  val + 2 ;
let checkB =  func( val );
if (checkA === checkB ) {
  return checkB;
}
else {
  'inconsistent results'
}
}

console.log(checkConsistentOutput(addTwo, 6));

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

//forEach

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(
  function(fruitsItem){console.log(`items grocery ${fruitsItem}`)}
);

fruits.forEach(
  fruitsItem => console.log(`=> ${fruitsItem}`)
);

function printGrocery (fruitsItem) {
   console.log('llamado por funcion ' + fruitsItem)};

fruits.forEach(printGrocery);

//map es similar a forEach solo que map retorna un arreglo
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(
  itemAnimal => {
    return itemAnimal[0];
  } 
);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(
  number => { return number/100; }
);
console.log(smallNumbers);
smallNumbers.forEach(sNumber=>{console.log(sNumber)});

//filter

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers1 = randomNumbers.filter(sNumber => 
{ if (sNumber < 250) {
  return sNumber
} });
console.log(randomNumbers);
console.log(smallNumbers1);
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(
 word => {
  if (word.length>7) {
    return word;
  }
 } 
);
console.log(favoriteWords);
console.log(longFavoriteWords);

//findIndex  retorna el indice del primer elelmento de la condicion
const animals1 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals1.findIndex( animal => 
 { if (animal==='elephant') {
  return animal;
 }});

 const startsWithS = animals1.findIndex( animal => {
  if (animal[0]==='s') {
    return animal;
  }
 } );
console.log(animals1);
console.log('animal elephant ' + foundAnimal + ' ' + animals1[foundAnimal]);
console.log('animal with s ' + startsWithS + ' ' + animals1[startsWithS]);
//reduce.  acumula en accumator los numeros del arreglo y en el current value guarda el siguiente elemento

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator,currentValue)=> {
console.log('The value of accumator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
return accumulator + currentValue;
}, 10);

console.log(newSum);

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));


// Use filter to create a new array
const interestingWords = words.filter((word)=>{
 if (word.length>5) { return word;}
})
  

// Make sure to uncomment the code below and fix the incorrect code before running it

 console.log(interestingWords.every((word) => { 
  return word.length > 5;
 } ));


 const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);


const reverseArray = (cadena) => {
  if (cadena.length>0) {
    let cadenaResultado = '';
    let j=0;
    for (i=cadena.length-1; i>=0 ; i--) {
      cadenaResultado[j]=cadena[i];
      j +=1;
    }
    return cadenaResultado;
  } else { return false};
  
} 

console.log(reverseArray('hernan martinez'));