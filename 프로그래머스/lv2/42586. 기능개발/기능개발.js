function solution(progresses, speeds) {
    var answer = [];
    const restDay = []
    
    progresses.forEach((element,idx)=>{
        restDay.push(Math.ceil((100-element)/speeds[idx]))
    })
    
    console.log(restDay)
    
    let count = 0
    let deploy = restDay[0]
    restDay.forEach((element,idx)=>{
        const next = restDay[idx+1]
        
        if(next && deploy < next){
            count++;
            answer.push(count)
            count=0
            deploy = next
        }
        else if(next && deploy >= next){
            count++
        }else{
            count++
            answer.push(count)
        }
    })
    return answer;
}