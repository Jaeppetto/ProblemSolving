const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);

let numbers = input.slice(1).map(Number);
numbers.sort((a, b) => a - b);

const result = numbers.join('\n');
console.log(result);
