function solution(dartResult) {
    var answer = [];
    
//     정규식을 통한 분리
    const regex = /(\d+[A-Z][*#]?)/g
    const scoreArr = dartResult.match(regex)
    
//     점수별로 순회, 내부에서는 문자열 탐색하여 switcj-case를 통해 점수 계산
    scoreArr.forEach((el,idx)=>{
        let score = ""
        
        for(const char of el){
            switch(char){
                case'S':
                    score = Number(score)**1
                    break;
                case'D':
                    score = Number(score)**2
                    break;
                case'T':
                    score = Number(score)**3
                    break;
                case'*':
                    score = Number(score)*2
                    if(answer[idx-1]) answer[idx-1]*=2
                    break;
                case'#':
                    score = Number(score)*-1
                    break;
                default:
                    score += char
            }
        }
//         라운드 별 점수 answer배열에 추가
        answer.push(score)
    })
    return answer.reduce((a,b)=>a+b);
}