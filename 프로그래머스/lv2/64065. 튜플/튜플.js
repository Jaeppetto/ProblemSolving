function solution(s) {
    var answer = [];
    const regex = /{{|}}/g
    const dst = s.replaceAll(regex,"").split('},{')
    const sort = dst.sort((a,b)=>a.length-b.length)
    
    sort.forEach((el)=>{
        const dst = el.split(',')
        dst.forEach((element)=>{
            if(!answer.includes(+element))answer.push(+element)
        })
    })
    return answer;
}

// 튜플을 전부 순회하여 유니크한 값들을 배열에 넣으면 되지 않나?
// 문자열로 입력받는데, 정규식을 통해 중괄호를 다 지울까?
// 그 다음 숫자 배열로 변환, 순회하며 정답 배열에 담을까?