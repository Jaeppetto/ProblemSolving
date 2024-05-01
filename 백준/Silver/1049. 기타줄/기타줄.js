let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [N, M] = input.shift();
const strings = input;

let minBundlePrice = Infinity;
let minIndividualPrice = Infinity;

for (let i = 0; i < M; i++) {
  const [bundlePrice, individualPrice] = strings[i];
  minBundlePrice = Math.min(minBundlePrice, bundlePrice);
  minIndividualPrice = Math.min(minIndividualPrice, individualPrice);
}

const allBundlePrice = Math.ceil(N / 6) * minBundlePrice;
const allCombPrice = Math.floor(N / 6) * minBundlePrice + (N % 6) * minIndividualPrice;
const allEachPrice = N * minIndividualPrice;

const result = Math.min(allBundlePrice, allCombPrice, allEachPrice);

console.log(result);
