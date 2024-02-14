// Readline 기본 형태
// 근데 왜 입력을 못받지?
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  // 입력받은 값을 처리 : 바로 사용하기 어렵고, 정제하여 사용해야 한다.
  input = line.split(" ").map((item) => +item);
  rl.close();
}).on("close", () => {
  // 입력이 끝나고 실행할 코드
  console.log(input);
  process.exit();
});
