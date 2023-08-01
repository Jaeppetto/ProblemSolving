function solution(s) {
    var answer = s
    const number = {0:'zero', 1:'one',2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven',8:'eight',9:'nine'}
    
    for(const key in number){
        const regex = new RegExp(number[key], 'gi');
        answer = answer.replace(regex,key)
        console.log(key, number[key])
    }
    return +answer;
}