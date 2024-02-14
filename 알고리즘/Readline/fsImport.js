const fs = require("fs");
let input = fs.readFileSync("Readline/inputTest.txt").toString();
console.log(input);

input = input.split("\n");
console.log(input);

const testCaseNum = +input[0];
const testArr = [];

for (let i = 1; i <= testCaseNum * 3; i += 3) {
  const arr = input[i];
  testArr.push({ inputAlpha: input[i], arrNum: +input[i + 1], inputArr: JSON.parse(input[i + 2]) });
  // 1,4,7
  console.log(testArr);
}

// Test Input Data !!
// 4
// RDD
// 4
// [1,2,3,4]
// DD
// 1
// [42]
// RRD
// 6
// [1,1,2,3,5,8]
// D
// 0
// []
