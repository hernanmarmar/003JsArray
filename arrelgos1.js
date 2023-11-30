const reverseArray = (cadena) => {
    if (cadena.length>0) {
        console.log(cadena.length);
      let cadenaResultado = [];
      let j=0;
      for (i=cadena.length-1; i>=0 ; i--) {
        cadenaResultado[j]=cadena[i];
        console.log('entro for ');
        j +=1;
      }
      return cadenaResultado;
    } else { return false};
    
  }  

  const sentence = ['sense.','make', 'all', 'will', 'This'];
  console.log(reverseArray(sentence));

  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

function greetAliens(aliensArray){
for (i=0; i < aliensArray.length ; i++) {
  console.log('Oh powerful ' + aliensArray[i]+', we humans offer our unconditional surrender!')
}
};

  aliens.forEach((alien) => {
    console.log('Oh powerfull ' + alien+",we humans offer our conditional surrender!");
  });

greetAliens(aliens);  

function convertToBaby(array){
  const newArray = [];
  for(i=0; i<array.length ;i++) {
    newArray.push('baby ' + array[i])
  }
  return newArray;
}  


// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals));


const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            let j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
const declineEverything = array => {
array.forEach(politelyDecline);
} 

acceptEverything = array => {
  array.forEach((elementArray)=>{
    console.log('Ok, I guess I will eat some '+elementArray+'.');
  });
}

acceptEverything(veggies);

const numbers1 = [2, 7, 9, 171, 52, 33, 14];

const toSquare = num => num * num;

// Write your code here:

const squareNums = (arrayNumber) => {
   return newArray = arrayNumber.map(number => {
    return number * number;
  });
}
console.log (squareNums(numbers1));

const shoutGreetings = (arrayStrings)=>{
  const newArray=[]; 
  for (i=0;i<arrayStrings.length;i++) {
    newArray.push(arrayStrings[i].toUpperCase() + '!');
  } 
  return newArray;
  }
  
  
  // Feel free to uncomment out the code below to test your function!
  
  const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
  
  console.log(shoutGreetings(greetings))
  // Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
  
//orden descendente
  const sortYears = (years) => {
    return years.sort((x,y)=>y-x);
    }
    
    
    
    // Feel free to uncomment the below code to test your function:
    
    const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]
    
    console.log(sortYears(years))
    // Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

    
// devuelve un arreglo de los elementos comunes a ambos
const justCoolStuff = (array1, array2) =>{
  return array1.filter( element => array2.includes(element));
  }
  

  // Feel free to uncomment the code below to test your function
  
  const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
  
  const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
  
  console.log(justCoolStuff(myStuff, coolStuff))
  // Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

  const isTheDinnerVegan = (dinner) => {
     return dinner.every( (food) =>  food.source === 'plant' ?  true : false);
    }
         
        
    
    // Feel free to comment out the code below to test your function
   
    const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
    
    console.log(isTheDinnerVegan(dinner))
    // Should print false

    const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Write your code here:

//const sortSpeciesByTeeth = species =>  species.sort((species1, species2) => species1.numTeeth > species2.numTeeth);
const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth)
// Feel free to comment out the code below when you're ready to test your function!

console.log(sortSpeciesByTeeth(speciesArray))

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]

// Write your code here:
const findMyKeys = arrayString =>  arrayString.findIndex( element => element === 'keys')  


// Feel free to comment out the code below to test your function
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4


// Final solution:
const dogFactory = (name, breed, weight) => {
  return {
      _name: name,
      _breed: breed,
      _weight: weight,
      get name() {
          return this._name;
      },
      set name(newName) {
          this._name = newName;
      },
      get breed() {
          return this._breed;
      },
      set breed(newBreed) {
          this._breed = newBreed;
      },
      get weight() {
          return this._weight;
      },
      set weight(newWeight) {
          this._weight = newWeight;
      },
      bark() {
          return 'ruff! ruff!'
      },
      eatTooManyTreats() {
          this._weight++
      }
  }
}

console.log(dogFactory('milo','beagle',10));

const factorial = (numero) => {
  let resultado=1;
  for(i=1;i<=numero;i++){
    resultado *=i;
  }
  return resultado;
}

console.log(factorial(6));

const subLength = (cadenaCaracter, caracter) => {
let arregloIndices = [];
for (i=0; i<=cadenaCaracter.length; i++) {
   if (cadenaCaracter[i]===caracter ) {
    arregloIndices.push(i);
    }
  }
  if (arregloIndices.length < 2 || arregloIndices.length > 2)
  {
    return 0
  } else {
    return arregloIndices[1] - arregloIndices[0] + 1;
  }
}

console.log(subLength('Saturday','a'));
console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log( subLength('cheesecake', 'k')); // returns 0

const groceries = ( arregloObjetos ) => {
let cadena='';
let arrayNew = [];
arregloObjetos.forEach((objeto)=>{
  for (const [keys,value] of Object.entries(objeto)) {
    arrayNew.push(value);
  }
})

if (arrayNew.length == 1) {
cadena= arrayNew[0];
} else {
for(i=0;i<arrayNew.length;i++){
  if (i+1 == arrayNew.length-1 ){
    cadena = cadena + arrayNew[i] +  ' and ';
  } else if (i==arrayNew.length-1) {
    cadena = cadena + arrayNew[i];
  }
  else { 
    cadena = cadena + arrayNew[i] + ', ';
  }
}
}
return cadena;
}

console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));

console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
// returns 'Bread and Butter'

console.log(groceries( [{item: 'Cheese Balls'}] ));
// returns 'Cheese Balls'