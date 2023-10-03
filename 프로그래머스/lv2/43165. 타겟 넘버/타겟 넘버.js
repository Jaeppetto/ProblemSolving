function solution(numbers, target) {
    let answer = 0;
    dfs(0, 0);
    // 재귀함수를 이용한 DFS
    function dfs(index, sum) {
        if(index === numbers.length) {
            if(sum === target) {
                answer++;
            }
            return;
        }
        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }
    
    return answer;
}

// function solution(numbers, target) {
//     let count = 0
//     const stack = [[numbers[0],0],[-numbers[0], 0]]
    
//     while(stack.length>0){
//         let [currentValue,currentIdx] = stack.pop()
//         const nextIdx = currentIdx+1
        
//         if(currentIdx===numbers.length-1 && currentValue===target){
//             count++
//         }else if(currentIdx<numbers.length-1){
//             stack.push([currentValue+numbers[nextIdx],currentIdx+1])
//             stack.push([currentValue-numbers[nextIdx],currentIdx+1])
//         }
//     }
//     return count
// }

// 모든 경우의 수를 탐색해야 하니 백트래킹이라고도 볼 수 있나? 근데 가지치기는 어떻게 할지
// 재귀를 이용하면 그리 어렵지 않게 구할 수 있을 것 같은데, 스택으로는 어떻게?

// 맨처음 하나 넣어, 빼고 다음 원소 +-한 것 두 개 넣어
// 스택에서 뺀 원소 길이가 numbers의 length와 같을 때, 그 계산한 값이 target이면 count++
// [계산한값,현재인덱스] -> 현재 인덱스가 길이랑 같을 경우 비교연산