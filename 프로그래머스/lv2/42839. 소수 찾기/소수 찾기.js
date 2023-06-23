function solution(numbers) {
    var combinatedNum = generateNumberCombinations(numbers)
    var answer = []
    var combinatedSet = new Set(combinatedNum)

    combinatedSet.forEach((element,i)=>{
        if(isPrime(+element) && !answer.includes(+element)) answer.push(+element)
    })
    
    console.log(combinatedSet)
    return answer.length;
}

function generateNumberCombinations(str) {
  const combinations = [];

  function generateCombinations(prefix, remaining) {
    if (prefix !== '') {
      combinations.push(prefix);
    }

    for (let i = 0; i < remaining.length; i++) {
      generateCombinations(
        prefix + remaining[i],
        remaining.slice(0, i) + remaining.slice(i + 1)
      );
    }
  }

  generateCombinations('', str);

  return combinations;
}

function isPrime(N) {
  if (N === 1 || N===0) return false;
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) return false;
  }
    
  return true;
}