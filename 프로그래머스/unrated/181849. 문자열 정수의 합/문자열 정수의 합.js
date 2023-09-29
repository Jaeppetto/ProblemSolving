function solution(num_str) {
    var answer = 0;
    for(char of num_str){
        answer+=Number(char)
    }
    return answer;
}