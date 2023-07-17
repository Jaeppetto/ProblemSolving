function solution(numbers) {
    var answer = [];
    const dst = getCombSum(numbers,2)
    dst.forEach((arr)=>
               answer.push(arr.reduce((a,b)=>a+b,0)))
    
    answer.sort((a,b)=>a-b)
    const set = new Set(answer)
    answer = [...set]
    return answer;
}

function getCombSum(arr,num){
    const results = []
    if(num===1) return arr.map(element=>[element])
    
    arr.forEach((fixed,index,origin)=>{
        const rest = origin.slice(index+1)
        const combinations = getCombSum(rest,num-1)
        const attached = combinations.map(element=>[fixed,...element])
        results.push(...attached)
    })
    
    return results
}