function solution(n) {
    const stack = []
    while(n>0){
        let quo = Math.floor(n/3)
        let mod = n%3
        
        if(mod===0){
            stack.unshift(4)
            n=quo-1
        } else{
            stack.unshift(mod)
            n=quo
        }
    }
    return stack.join('');
}

// 1. N을 3으로 나눈 몫과 나머지를 가져옴
// 2-1. 나머지가 1,2일 경우 제일 뒤에 붙힘
// 2-2. 나머지가 0일 경우, 몫을 1빼고 나머지를 4로 변환
// 3. 생긴 몫에 대해 해당 과정을 반복