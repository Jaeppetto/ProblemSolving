function solution(nums) {
    var answer = 0;
    const comb = combination(nums,3)
    const sum = comb.map((el)=>el.reduce((a,b)=>a+b))
    console.log(sum)
    
    sum.forEach((el)=>{
        if(isPrime(el))answer+=1
    })
    return answer;
}

// 1. 3개의 조합을 만들어야 하고
// 2. 만든 조합의 합 중 소수를 찾아야 함
function combination(arr,number){
    const result = []
    if(number===1) return arr.map((el)=>[el])
    
    arr.forEach((fixed,index,origin)=>{
        const rest = origin.slice(index+1)
        const comb = combination(rest,number-1)
        const attached = comb.map((el)=>[fixed,...el])
        result.push(...attached)
    })
    return result
}

function isPrime(N){
    if(N===1 || N===0) return false;
    for(let i=2;i<=Math.sqrt(N);i++){
        if(N%i===0) return false
    }
    return true
}