let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const T = +input.shift();
const mappedInput = input.map((el) => el.split(' ').map(Number));
const array = [];

for (let i = 0; i < T; i++) {
  const N = mappedInput.shift();
  array.push(mappedInput.splice(0, N));
}

array.forEach((el) => {
  const sortedEl = el.sort((a, b) => a[0] - b[0]);
  const result = [];

  result.push(sortedEl.shift());
  let criteria = result[0][1];

  sortedEl.forEach((e) => {
    if (e[1] < criteria) {
      result.push(e);
      criteria = e[1];
    }
  });
  console.log(result.length);
});
