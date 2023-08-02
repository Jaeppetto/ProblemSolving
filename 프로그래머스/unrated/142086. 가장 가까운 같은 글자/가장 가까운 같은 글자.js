function solution(s) {
    var answer = [];
//     일단 제일 먼저 드는 생각은, 2중 루프 -> 하나는 순방향, 하나는 현재 원소부터 역방향으로
//     index를 구할 수 있는 메서드가 있는데, 여러 개도 반환되는지 확인 필요
//     -> lastIndexOf를 사용하면 되겠다!
    
    const str = s.split('')
    str.forEach((item,idx)=>{
        const history = str.slice(0,idx)
        if(idx===0 || !history.includes(item)) answer.push(-1)
        else(answer.push(idx-history.lastIndexOf(item)))
    })
    return answer;
}