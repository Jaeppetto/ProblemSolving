function solution(s, n) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const lower = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let split = s.split('')
    let answer = []
    
    split.forEach((element)=>{
//         1. 만약 이 원소가 공백이면, answer 배열에 공백 추가
//         2. 만약 대문자이면, 대문자 배열에서 현재 인덱스 + N의 알파벳 추가
//         3. 소문자면 2번과 동일하게
        if(element===' ') answer.push(' ')
        else if(element===element.toUpperCase()){
            answer.push(upper[(upper.findIndex(el=>el===element)+n)%26])
        }
        else if(element===element.toLowerCase()){
            answer.push(lower[(lower.findIndex(el=>el===element)+n)%26])
        }
    })
    return answer.join('');
}