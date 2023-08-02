function solution(food) {
    var dst = '';
    var answer = ''
    
    for(let i=1;i<food.length;i++){
        dst+=i.toString().repeat(Math.floor(food[i]/2))
    }
    
    const reverse = dst.split('').reverse().join('')
    answer = dst+'0'+reverse
    return answer;
}