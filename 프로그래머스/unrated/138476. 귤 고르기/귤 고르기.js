function solution(k, tangerine) {
    let answer=0
    let dst = 0
    let obj = {}
    tangerine.forEach((el,idx)=>{
        obj[el]=obj[el]+1||1
    })
    let sortValue = Object.values(obj).sort((a,b)=>a>b?-1:1)
    sortValue.forEach((el,idx)=>{
        if(dst>=k) return answer
        dst+=el;
        answer++;
    })
    return answer
}