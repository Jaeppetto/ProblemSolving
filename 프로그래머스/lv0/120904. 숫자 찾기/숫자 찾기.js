function solution(num, k) {
    var answer = 0;
    var idx = 0;
    
    num = num.toString()
    k = k.toString()
    var numStr = [...num]
    
    numStr.forEach((item)=>{
        idx+=1;
        
        if(item === k && answer === 0){
            answer = idx
        }
    })
    
    if(answer===0){
        return -1
    }
    else{
        return answer;
    }
}