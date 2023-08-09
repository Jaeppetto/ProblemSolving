function solution(prices) {
    const dp = Array.from({length : prices.length}, (_, i) => prices.length - i - 1);
    const stack = []
    
    prices.forEach((price,idx)=>{
//         스택의 가장 최근 요소와 비교, 하락세일 경우 루프 실행
        while(stack.length && prices[stack[stack.length-1]] > price){
            const popidx = stack[stack.length-1]
            
//             현재 시간과 Inputtime의 차이 값을 버틴 시간으로 갱신
            dp[popidx] = idx-popidx
            stack.pop()
        }
//         idx는 Dp에서 고유 위치이자 Stack에서의 Inputtime
        stack.push(idx)
    })
    return dp;
}

// 1. 완전탐색
// prices 배열을 순회하면서, 본인보다 낮은 가격일 때의 인덱스를 찾음
// 만약 낮은 인덱스가 없으면, 총길이 - (본인의 인덱스 + 1)
// 낮은 가격의 인덱스가 있는 경우, 그 인덱스에서 본인의 인덱스를 뺌