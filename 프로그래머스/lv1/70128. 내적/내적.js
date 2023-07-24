function solution(a, b) {
    var answer = 0;
    
    for(let i=0;i<a.length;i++){
        const dst = a[i] * b[i]
        answer+=dst
    }
    return answer;
}