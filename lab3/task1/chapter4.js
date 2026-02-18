// Chapter 4: Variables
// Understanding let, const, and var, with scope and hoisting

'use strict';

// Task 1: Variable declaration methods
let mutableVariable = 'Can be reassigned';
const immutableVariable = 'Cannot be reassigned';
var legacyVariable = 'Old way (not recommended)'; // Function-scoped

console.log('Initial values:');
console.log('let:', mutableVariable);
console.log('const:', immutableVariable);
console.log('var:', legacyVariable);

mutableVariable = 'Reassigned value';
console.log('After reassignment:', mutableVariable);

const person = {
  name: 'Alice',
  age: 28
};

person.age = 29;
console.log('Modified object property:', person);

const firstName = 'John';
const MAXIMUM_SIZE = 1000;
const isActive = true;

console.log('Naming conventions:');
console.log('firstName:', firstName);
console.log('MAXIMUM_SIZE:', MAXIMUM_SIZE);
console.log('isActive:', isActive);

{
  let blockScoped = 'Only accessible in this block';
  const alsoBlockScoped = 'Same scope as let';
  console.log('Inside block - let:', blockScoped);
}

function demonstrateVarScope() {
  var functionScoped = 'Accessible anywhere in function';
  console.log('In function:', functionScoped);
}

demonstrateVarScope();

console.log('Loop scope demonstration:');
for (let i = 0; i < 3; i++) {
  console.log('i =', i);
}

console.log('Hoisting - var behavior:');

console.log('hoistedVar before declaration:', typeof hoistedVar);
var hoistedVar = 'Initialized after';
console.log('hoistedVar after declaration:', hoistedVar);


const age = 25;
let score = 0;

if (age > 18) {
  score = 100;
}

console.log('Final score:', score);
