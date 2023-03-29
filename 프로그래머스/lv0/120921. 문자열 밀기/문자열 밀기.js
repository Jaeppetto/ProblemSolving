function solution(A, B) {
    var answer = 0;
    var spread = [...A]
    
    for(let i=0; i<spread.length;i++){
        if(A===B) return i;
        else {
            spread.unshift(spread.pop())
            if(spread.join('')===B) return i+1;
        }
    }
    return -1;
}