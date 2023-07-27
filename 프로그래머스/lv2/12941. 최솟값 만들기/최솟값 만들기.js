function solution(A,B){
    var sortedA = A.sort((a,b)=> a-b)
    var sortedB = B.sort((a,b)=> b-a)
    var sum = 0
    
    sortedA.forEach((el,idx)=>{
        const dst = el*sortedB[idx]
        sum+=dst
    })
    return sum
}