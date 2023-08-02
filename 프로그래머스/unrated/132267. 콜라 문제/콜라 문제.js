function solution(a, b, n) {
    var answer = 0;
    let empty = n
   
    
    while(empty>=a){
        const get = Math.floor(empty/a)*b
        answer+=(get)
        
        empty = get + empty%a
    }
    return answer;
}