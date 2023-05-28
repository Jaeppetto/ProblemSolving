function solution(n) {
    var answer = 0;
    
//     1. 입력값이 7의 배수이면 몫을 반환
//     2. 나머지가 나머지가 발생할 경우 몫+1 반환
    if(n%7===0) answer = n/7
    else answer = n/7+1
    return Math.floor(answer);
}