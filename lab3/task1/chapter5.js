

'use strict';


console.log('=== Number Data Type ===');
const integer = 42;
const floating = 3.14;
const negative = -10;
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const notANumber = 'hello' / 2;

console.log('Integer:', integer, typeof integer);
console.log('Float:', floating, typeof floating);
console.log('Infinity:', infinity);
console.log('NaN:', notANumber);
console.log('typeof NaN:', typeof notANumber);

console.log('\nSpecial Numeric Values:');
console.log('Infinity > any number:', infinity > 9007199254740991);
console.log('NaN equality:', notANumber === notANumber);
console.log('NaN check:', Number.isNaN(notANumber));

const num1 = 15;
const num2 = 4;
console.log('\nNumber Operations:');
console.log('Addition:', num1 + num2);
console.log('Subtraction:', num1 - num2);
console.log('Multiplication:', num1 * num2);
console.log('Division:', num1 / num2);
console.log('Remainder:', num1 % num2);

console.log('\n=== BigInt Data Type ===');
const largeBigInt = 12345678901234567890n;
const anotherBigInt = BigInt('98765432109876543210');

console.log('BigInt 1:', largeBigInt);
console.log('BigInt 2:', anotherBigInt);
console.log('typeof BigInt:', typeof largeBigInt);

const bigSum = largeBigInt + anotherBigInt;
console.log('BigInt sum:', bigSum);

console.log('\n=== String Data Type ===');
const doubleQuote = 'Hello';
const singleQuote = 'World';
const template = `Hello, ${doubleQuote}!`;

console.log('Double quotes:', doubleQuote, typeof doubleQuote);
console.log('Template literal:', template);

const firstName = 'John';
const lastName = 'Doe';
console.log('\nString Operations:');
console.log('Concatenation:', firstName + ' ' + lastName);
console.log('Template literal:', `${firstName} ${lastName}`);
console.log('Expression in template:', `1 + 2 = ${1 + 2}`);
console.log('String length:', firstName.length);
console.log('Uppercase:', firstName.toUpperCase());
console.log('Lowercase:', lastName.toLowerCase());

console.log('\n=== Boolean Data Type ===');
const isTrue = true;
const isFalse = false;

console.log('True value:', isTrue, typeof isTrue);
console.log('False value:', isFalse, typeof isFalse);

console.log('\nComparisons (return boolean):');
console.log('5 > 3:', 5 > 3);
console.log('5 < 3:', 5 < 3);
console.log('5 === 5:', 5 === 5);
console.log('5 !== 3:', 5 !== 3);

const condition1 = true;
const condition2 = false;
console.log('\nBoolean Logic:');
console.log('AND (&&):', condition1 && condition2);
console.log('OR (||):', condition1 || condition2);
console.log('NOT (!):', !condition1);

console.log('\n=== Null ============');
const emptyValue = null;
console.log('null value:', emptyValue);
console.log('typeof null:', typeof emptyValue);

console.log('\n=== Undefined ===');
let unassignedVar;
console.log('Unassigned variable:', unassignedVar);
console.log('typeof undefined:', typeof unassignedVar);

let explicitUndefined = undefined;
console.log('Explicit undefined:', explicitUndefined);

console.log('\n=== Symbol ===');
const sym1 = Symbol('id');
const sym2 = Symbol('id');
console.log('Symbol 1:', sym1);
console.log('Symbol 2:', sym2);
console.log('typeof Symbol:', typeof sym1);
console.log('Symbols are unique:', sym1 === sym2); 

console.log('\n=== Object ===');
const user = {
  name: 'John',
  age: 30,
  city: 'New York'
};

console.log('Object:', user);
console.log('typeof object:', typeof user);
console.log('Property access:', user.name);
console.log('Object property modification:');
user.age = 31;
console.log('Updated age:', user.age);

console.log('\n=== typeof Operator ===');
console.log('typeof 10:', typeof 10);
console.log('typeof "hello":', typeof 'hello');
console.log('typeof true:', typeof true);
console.log('typeof undefined:', typeof undefined);
console.log('typeof null:', typeof null);
console.log('typeof Symbol():', typeof Symbol());
console.log('typeof {}:', typeof {});
console.log('typeof []:', typeof []);
console.log('typeof function(){}:', typeof function () {});

console.log('\n=== Type Conversion ===');
console.log('String(123):', String(123));
console.log('Number("456"):', Number('456'));
console.log('Boolean(0):', Boolean(0));
console.log('Boolean(1):', Boolean(1));
console.log('Boolean(""):', Boolean(''));
console.log('Boolean("text"):', Boolean('text'));

console.log('\n=== Data Types Summary ===');
const summary = {
  primitives: ['number', 'bigint', 'string', 'boolean', 'null', 'undefined', 'symbol'],
  nonPrimitive: ['object'],
  totalTypes: 8
};

console.log('Total data types:', summary.totalTypes);
console.log('Primitive types:', summary.primitives.length);
console.log('Non-primitive types:', summary.nonPrimitive.length);
