// 공백 기준 두 글자 입력 -> 배열로 들어가고, 인덱싱하여 사용할 것
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);

  // 입력 완료 후 ctrl + D로 탈출
}).on("close", function () {
  console.log(input);
  process.exit();
});
