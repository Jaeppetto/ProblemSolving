const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const M = +input.shift();
const leftArray = input.shift().split(' ').map(Number);

const resultArray = new Array(M).fill(null);

leftArray.forEach((count, i) => {
  let index = 0;

  while (count > 0 || resultArray[index] !== null) {
    if (resultArray[index] === null) {
      count--;
    }
    index++;
  }

  resultArray[index] = i + 1;
});

console.log(resultArray.join(' '));
