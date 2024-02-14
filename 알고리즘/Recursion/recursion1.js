// function countDown(num){
//   if(num<=0){
//     console.log("All done!");
//     return;
//   }
//   console.log(num);
//   num--;
//   countDown(num)
// }

// countDown(4)

// 반복문을 이용한 팩토리얼 구현

// function loopFactorial(num){
//   let total = 1;
//   for(let i = num;i>0;i--){
//     total *= i
//   }
//   return total
// }

// loopFactorial(3)

// 재귀를 이용한 팩토리얼 구현

function recursionFactorial(num) {
  if (num === 1) return 1;
  return recursionFactorial(num - 1) * num;
}

recursionFactorial(4);
