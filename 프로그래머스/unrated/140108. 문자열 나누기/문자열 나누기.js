function solution(s) {
    var answer = 0;
    const split = s.split('')
    let tmp = []
    let isSame = 0, isDiff = 0
    let criteria = ''
    
    while(split.length!==0){
        if(tmp.length===0){
            criteria = split.shift()
            tmp.push(criteria)
            isSame++
        }
        
        const shift = split.shift()
        if(shift===criteria) isSame++
        else isDiff++
        
        if(isSame===isDiff || (split.length===0 && tmp.length===1)){
            tmp = []
            answer++
        }
            
    }
    return answer===0?1:answer;
}

// 원소를 하나씩 빼는데, 처음 빼는 문자가 기준(Criteria)
// 기준과 동일하거나 동일하지 않은 경우를 카운트
// 해당 경우의 수가 같아지면 지금까지의 문자열을 반환
// 남은 문자열에서 해당 과정을 반복
// 최종적으로 반환된 문자열의 갯수를 구하시오