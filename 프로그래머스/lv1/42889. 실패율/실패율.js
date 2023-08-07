function solution(N, stages) {
    const dst = []
    
    for(let i=1;i<=N;i++){
        const inProgress = stages.filter((el)=>el===i)
        const done = stages.filter((el)=>el>=i)
        const obj = {
            stage : i,
            failure : inProgress.length / done.length
        }
        dst.push(obj)
    }
    const answer = dst.sort((a,b)=>b.failure-a.failure).map((el)=>el.stage)
    
    console.log(answer)

    return answer;
}