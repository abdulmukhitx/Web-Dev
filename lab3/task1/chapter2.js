

// Single-line comment
console.log('First statement');
console.log('Second statement'); // inline comment

/*
  Multi-line comment
  Used for longer explanations
  Can span multiple lines
*/

// Task 1: Statements and semicolons
const x = 5;
const y = 10;
const sum = x + y;
console.log('Sum:', sum);

// Task 2: Statement grouping
{
  const blockVar = 'This is in a block';
  console.log(blockVar);
}

// Task 3: Semicolon insertion
const statement1 = 'No semicolon needed'
const statement2 = 'Also fine'
console.log(statement1, statement2)

// Task 4: Comments best practices
const age = 25;
if (age >= 18) {
  console.log('User is an adult');
}

const firstName = 'John';
const lastName = 'Doe';
const fullName = `${firstName} ${lastName}`;
console.log('Full name:', fullName);
