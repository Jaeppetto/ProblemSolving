function solution(n, left, right) {
    const answer = []
    for(let i=left;i<=right;i++){
        // (left+1/n)+1 = 몫 (그 줄 개수와 동일)
        // (left+1%n) = 나머지 (그 줄에서 몇 번째인지)
        // 만약 나머지가 몫 이하이면 answer[left] = 몫과 같음
        // 아니라면 나머지와 같은데, 나머지가 0일 경우에는 5가 됨
        let quo = Math.floor((i+1)/n)+1
        let rest = ((i+1)%n)
        
        if(rest===0) answer.push(n)
        else if(rest<=quo) answer.push(quo)
        else answer.push(rest)
    }
    return answer
}