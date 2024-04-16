let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const N = +input;

const array = findPrimes(N);
let [start, end] = [0, 0];
let sum = array[0];
let count = 0;

while (end < array.length) {
  if (sum < N) {
    sum += array[++end];
  } else if (sum > N) {
    sum -= array[start++];
  } else {
    count++;
    sum -= array[start++];
  }
}

console.log(count);

function findPrimes(N) {
  let isPrime = new Array(N + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= N; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= N; j += i) {
        isPrime[j] = false;
      }
    }
  }

  let primes = [];
  for (let i = 2; i <= N; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  return primes;
}
