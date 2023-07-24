function solution(s){
    let obj = {}
    for(const el of s.toLowerCase()){obj[el]?obj[el]+=1:obj[el]=1}
    
    return obj['p']===obj['y']?true:false
    }