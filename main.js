const reader = require('readline-sync');
const util = require('./myUtils');

const n1 = reader.questionInt("Please insert a positive number = ");
const n2 = reader.questionInt("Please insert a positive number = ");

function primesOfRange(a1, a2) {
  if(a1 > 0 && a2 > 0){
    let numbers = [];

    for(let i = a1; i <= a2; i++){
      if(util.isPrime(i)){
        numbers.push(i)
      }
    }
    if(numbers.length){
      return numbers;
    }else{
      return "there are no prime numbers";
    }
  }else{
    return "both numbers should be positive";
  }
}

let ard = primesOfRange(n1,n2);
util.printArray(ard);