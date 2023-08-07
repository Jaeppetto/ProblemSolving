function solution(n, k) {
    const refined = n.toString(k).split(0).filter((el)=>el!=='' && el!=='1')
    const dst = []
    
    refined.forEach((el)=>{
        if(isPrime(el)) dst.push(el)
    })
    return dst.length
}

function isPrime(N){
    if(N===0 || N===1) return false
    for(let i=2;i<=Math.sqrt(N);i++){
        if(N%i===0) return false
    }
    return true
}

// 진법변환은 toString으로 하면 되는데
// 조건에 맞게 필터링하기 위해선 정규식을 사용해야 할 듯 함
// 0으로 split한 후 1인 원소 모두 지우면 되는 거 아녀?