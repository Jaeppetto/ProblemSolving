function solution(t, p) {
    var answer = [];
    
    for(var i=0;i<=t.length-p.length;i++){
        var dst = t.substr(i,p.length)
        
        if(parseInt(dst) <= parseInt(p)){
            answer.push(dst)
        }
    }
    return answer.length;
}