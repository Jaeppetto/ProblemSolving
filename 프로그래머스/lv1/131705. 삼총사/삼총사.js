function solution(number) {
    var answer = 0;
    const dst = getCombinations(number,3)
    dst.forEach((element)=>{
        if(element.reduce((a,b)=>a+b,0)===0) answer+=1
    })
    return answer;
}
const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);
    
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]); 
    results.push(...attached);
  });

  return results;
}