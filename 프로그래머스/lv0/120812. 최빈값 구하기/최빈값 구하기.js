function solution(array) {
const frequency = {};
  let maxCount = 0;
  let mode = -1;

  array.forEach((num) => {
    if (!frequency[num]) {
      frequency[num] = 1;
    } else {
      frequency[num]++;
    }

    if (frequency[num] > maxCount) {
      maxCount = frequency[num];
      mode = num;
    } else if (frequency[num] === maxCount) {
      mode = -1;
    }
  });

  return mode;
}