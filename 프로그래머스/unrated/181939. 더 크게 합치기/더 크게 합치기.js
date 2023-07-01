function solution(a, b) {
    var answer = 0;
    var ab = a.toString() + b.toString()
    var ba = b.toString() + a.toString()
    
    if(Number(ba)>Number(ab)) answer = Number(ba)
    else{
        answer = Number(ab)
    }
    return answer;
}