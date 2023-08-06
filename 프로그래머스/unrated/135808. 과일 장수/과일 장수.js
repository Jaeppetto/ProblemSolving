function solution(k, m, score) {
    var answer = 0;
    const refined = score.sort((a,b)=>b-a).slice(0,Math.floor(score.length/m)*m)
    
    for(let i=0;i<refined.length;i+=m){
        const slice = refined.slice(i,i+m)
        answer+=slice[slice.length-1]*m
    }
    return answer;
}

// 내림차순 정렬해서, m개씩 묶은 상자별로 점수 계산하여 score++하면 끝?