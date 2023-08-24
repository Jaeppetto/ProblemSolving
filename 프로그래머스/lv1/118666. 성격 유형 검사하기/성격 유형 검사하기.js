function solution(survey, choices) {
    let answer = '';
//     유형 초기화
    const type = {
        'R':0,
        'T':0,
        'C':0,
        'F':0,
        'J':0,
        'M':0,
        'A':0,
        'N':0,
    }
    
//     배열 순회하여 점수 계산
    survey.forEach((el,idx)=>{
        const [front,back] = el.split('')
        if(choices[idx] < 4){
            type[front] += Math.abs(choices[idx]-4)
        }
        else if(choices[idx] > 4){
            type[back] += Math.abs(choices[idx]-4)
        }
    })
      
// 최종 유형 부여
    if(type['R'] >= type['T']) answer = answer.concat('R')
    else answer = answer.concat('T')
    
    if(type['C'] >= type['F']) answer = answer.concat('C')
    else answer = answer.concat('F')
    
    if(type['J'] >= type['M']) answer = answer.concat('J')
    else answer = answer.concat('M')

    if(type['A'] >= type['N']) answer = answer.concat('A')
    else answer = answer.concat('N')

    return answer;
}