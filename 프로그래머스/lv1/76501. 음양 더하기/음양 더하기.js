function solution(absolutes, signs) {
    var answer = 0;
    
    signs.forEach((el,idx)=>{
        var dst = 0
        if(el===true) answer+=absolutes[idx]
        else {
            answer+=parseInt('-'+absolutes[idx])
        }
    })
    return answer;
}