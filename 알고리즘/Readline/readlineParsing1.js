// 공백 기준 두 글자 입력 -> 배열로 들어가고, 인덱싱하여 사용할 것
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ").map((element) => +element);
  // console.log(input);

  rl.close();
}).on("close", function () {
  console.log(input);
  console.log(input[0] + input[1]);
  process.exit();
});
