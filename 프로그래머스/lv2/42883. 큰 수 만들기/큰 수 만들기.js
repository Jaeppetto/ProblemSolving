function solution(number, k) {
//     조합을 생각했었는데, 배치 순서도 고려해야함. -> 순열은 core dump 발생
//     투포인터 또한 시간 초과 발생
    
//     Stack 구조 활용
//     1. 스택이 비어 있을 때, 현재 값을 스택에 넣음
//     2. 스택이 비어 있지 않을 때, 현재 값과 스택의 Pop()을 비교
//     2-1. 비교하여 현재 값이 더 큰 경우, 스택의 Pop()을 제거하고 현재 값을 Push(), k는 --;
//     2-2. 현재 값이 더 작은 경우, 스택에 Push
//     3. k==0이 될 때까지 반복
    
    const stack = []
    let answer = ''
    
    for(let i=0;i<number.length;i++){
        const currentValue = number[i]
        
        while(k>0 && stack[stack.length-1] < currentValue){
            stack.pop()
            k-=1
        }
        stack.push(currentValue);
    }
    stack.splice(stack.length-k,k)
    answer = stack.join('')
    
    return answer
}