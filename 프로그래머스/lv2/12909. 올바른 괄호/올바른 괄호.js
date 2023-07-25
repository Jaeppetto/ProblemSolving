function solution(s){
    var count = 0
    for (let i=0;i<s.length;i++){
        const dst = s[i]
        dst==='('?count+=1:count-=1
        
        if(count<0) return false
    }

    return count===0?true:false
}