let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map(Number));

const N = input[0][0];
const array = input[1].sort((a, b) => a - b);
let result = 0;

for (let i = 0; i < N; i++) {
  let [start, end] = [0, N - 1];

  while (start < end) {
    const sum = array[start] + array[end];
      
    if(start===i){
        start++
        continue;
    }
      
    if(end===i){
        end--
        continue;
    }

    if (sum === array[i]) {
      result++;
      break;
    } else if (sum < array[i]) {
      start++;
    } else {
      end--;
    }
  }
}

console.log(result);
