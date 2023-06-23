function solution(brown, yellow) {
    var answer = [];
//     1. 노란 격자 수에 맞게 만들 수 있는 모든 격자 크기를 가져옴
//     (Ex. yellow === 24, (2*12)(4*6)(3*8))
//     2. 그럼 각 곱해진 수 * 2 + 4가 갈색 격자 수임.
//     이 수를 충족하는 연산에 이용된 수가 최종 격자의 크기
    var cadidate = findNumberPairs(yellow)
    cadidate.forEach((element,i)=>{
        if(element[0]*2 + element[1]*2 + 4 === brown)
            answer.push(element[0]+2,element[1]+2)
    })
    
    answer.sort(function(a,b){return b-a})
    return answer;
}

function findNumberPairs(n){
    const pairs = [];
    
    for(let i=1; i<=Math.sqrt(n);i++){
        if(n%i===0){
            const factor = n/i;
            
            pairs.push([i,factor])
        }
    }
    return pairs
}