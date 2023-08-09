function solution(word) {
    const words = 'AEIOU'
    const answer = []
    
    for(const word of words){
        const result = []
        const dfs = DFS(word,"",result)
        answer.push(...result)
    }
    return answer.indexOf(word)+1;
}

// DFS? 완탐 후 정렬, 인덱스 찾으면 끝?
function DFS(currentValue,inputValue,result){
    const words = 'AEIOU'
    
    if(currentValue.length===5)return;
    const newValue = currentValue+inputValue
    result.push(newValue)
    
    for(const char of words){
        DFS(newValue,char,result)
    }
}