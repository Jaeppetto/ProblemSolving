function solution(n) {
    var candidate = n+1;
//     1씩 더해가며 진수 변환 연산, 조건2을 만족하는지 판별해봐?
    while(true){
        const isNext = getBinaryLength(n,candidate);
        if(isNext) return candidate
        
        candidate+=1
    }
}

function getBinaryLength(origin,next){
    const binaryOrigin = origin.toString(2)
    const nextOrigin = next.toString(2)
    
    const originLength = binaryOrigin.replaceAll(/0/g,'').length
    const nextLength = nextOrigin.replaceAll(/0/g,'').length
    
    return originLength===nextLength?true:false
}