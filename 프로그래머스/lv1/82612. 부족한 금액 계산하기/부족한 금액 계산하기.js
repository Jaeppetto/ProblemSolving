function solution(price, money, count) {
    var tmp = 0
    var answer = -1
    for(let i=1;i<=count;i++){
        tmp+=price*i
    }
    answer = tmp-money
    
    if(tmp<=money) return 0
    
    return answer;
}