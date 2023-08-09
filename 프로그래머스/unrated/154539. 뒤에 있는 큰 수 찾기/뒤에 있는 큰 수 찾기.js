function solution(numbers) {
    const dp = new Array(numbers.length).fill(-1)
    const stack = []
    
    numbers.forEach((num,idx)=>{
        while(stack.length && numbers[stack[stack.length-1]]<num){
            const popidx = stack[stack.length-1]
            dp[popidx] = num
            stack.pop()
        }
        stack.push(idx)
    })
    return dp;
}

// 마지막 원소이거나, 본인 이후 배열에서 본인보다 큰 값이 없는 경우 해당 인덱스의 원소 값은 -1