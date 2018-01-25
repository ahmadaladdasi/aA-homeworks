function mysteryScoping1() {
  var x = 'out of block';
  if(true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}

// mysteryScoping1();

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block'
    console.log(x);
  }
  console.log(x);
}

// mysteryScoping2();

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    // var x = 'in block' // can't reassign a const
                          // within the function scope
    console.log(x);
  }
  console.log(x);
}

// mysteryScoping3(); // throws an error as expected


function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block'
    console.log(x);
  }
  console.log(x);
}

// mysteryScoping4();

function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block'
    console.log(x);
  }
  // let x = 'out of block again'; // throws an error since x is declared in this scope
  console.log(x);
}

// mysteryScoping5();

// madLib

const madLib = (verb,adj,noun) => {
  console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`);
};

madLib('eat','marvelous','cookies');

const isSubstring = (searchString,subString) => {
  console.log(searchString.includes(subString));
};

isSubstring('momo is joko buk','momo');

// loops

// fizzBuzz
// takes an arr returns an arr with nums divs by 3 or 5 but not both

const fizzBuzz = (arr) => {
  let result = [];

  for (var i = 0; i < arr.length; i++){
    let num = arr[i]
    if (num % 3 === 0 && num % 5 !== 0) {
      result.push(num);
    } else if (num % 3 !== 0 && num % 5 === 0) {
      result.push(num);
    }
  }
  return result;
}

console.log(fizzBuzz([1,2,3,4,5,6,7,8,9,10]));


const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let i = 2;

  while(i < num){
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
}

console.log(isPrime(15485863));


const sumofNPrimes = (n) => {
  let result = [];
  let sum = 0;
  let i = 2;
  while (result.length < n){
    if (isPrime(i)){
      result.push(i);
      sum += i
    }
    i += 1;
  }
  return sum;
}
console.log(sumofNPrimes(4));
