function solution(n) {
    var answer = [];
    const str = n.toString()

    for(let i=str.length-1;i>=0;i--){
        answer.push(+str[i])
    }
    return answer
}