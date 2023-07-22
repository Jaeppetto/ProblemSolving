const readline = require("readline");

// readline 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 사용자 입력을 받는 함수
function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

// 비동기 함수에서 readline을 사용하는 예시
async function main() {
  try {
    const name = await question("이름을 입력하세요: ");
    const age = await question("나이를 입력하세요: ");

    console.log(`이름: ${name}`);
    console.log(`나이: ${age}`);

    rl.close();
  } catch (error) {
    console.error("입력 오류:", error);
  }
}

// main 함수 실행
main();
