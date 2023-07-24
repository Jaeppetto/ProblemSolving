function solution(n) {
    var answer = 0;
    for(let i=0;i<n;i++){
        const rest = n%i
        
        if(rest===1)return i
    }
}