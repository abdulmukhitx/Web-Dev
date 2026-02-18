'use strict';


const strictVar = 'This must be declared';


function strictFunction() {
  'use strict';
  const localVar = 'This is in strict function scope';
  console.log(localVar);
}

strictFunction();

let count = 0;
const MAX_COUNT = 100;
var legacyVar = 'Not recommended but works';

console.log('Strict mode is active');

const obj = {
  name: 'John',
  age: 30
};

console.log('Object:', obj);
obj.name = 'Jane';
console.log('Updated name:', obj.name);
