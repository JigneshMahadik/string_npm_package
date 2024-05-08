# string-manipulation-test

This is the string manipulation npm package

## Installation

You can install this package via npm:

```bash
npm install string-manipulation-test

##########

const calc = require('string-manipulation-test');

console.log(calc.capitalize('hello')); // Output: Hello
console.log(calc.reverseString('hello')); // Output: olleh
console.log(calc.isPalindrome('hello')); // Output: false
console.log(calc.sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(calc.averageArray([1, 2, 3, 4, 5])); // Output: 3
console.log(calc.shuffleArray([1, 2, 3, 4, 5])); // Output: [randomly shuffled array]
console.log(calc.uniqueElements([1, 2, 2, 3, 3, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(calc.truncateString('Lorem ipsum dolor sit amet', 10)); // Output: Lorem ipsu...
console.log(calc.randomNumber(1, 10)); // Output: random number between 1 and 10
console.log(calc.deepClone({ foo: 'bar' })); // Output: { foo: 'bar' }
