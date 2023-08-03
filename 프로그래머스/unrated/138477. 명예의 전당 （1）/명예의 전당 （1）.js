function solution(k, score) {
    var answer = [];
//     1. 비어있는 명예의전당 배열 hof생성
//     2. hof의 길이가 k보다 작은 경우, 그냥 push()
//     3. k를 넘어서는 경우, 해당 점수가 hof에 존재하는지 확인
//     4. 이미 존재한다면, 그냥 넘어가고 최하점을 반환해
//     5. 새로운 점수라면, hof에 편입시킨 후, 내림차순 정렬하여 K번까지 끊음. 이후 최하점 반환
//     6. 반환된 최하점 배열 출력
    let hof = [];
    
    score.forEach((element)=>{
            hof.push(element)
            hof.sort((a,b)=>b-a)
            hof = hof.splice(0,k)
            answer.push(hof[hof.length-1])
    })
    return answer;
}