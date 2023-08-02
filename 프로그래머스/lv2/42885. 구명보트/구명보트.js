function solution(people, limit) {
    let answer = 0;
    const length = people.length

//     배열 내림차순 정렬
    people.sort((a,b)=>a>b?-1:1)
    
    for(let i=0, j=length-1;i<=j;i++){
//         0부터 시작하는 i가 j에 도달할 때까지 반복문 실행
        if(people[i] + people[j] <= limit) j--
        answer++
    }
    console.log(people)

    return answer;
}
