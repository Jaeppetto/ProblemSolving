function solution(elements) {
    const arr = [...elements,...elements]
    const empty = []
    
    for(let i=1;i<=elements.length;i++){
        for(let j=0;j<elements.length;j++){
            const dst = arr.slice(j,j+i)
            empty.push(dst.reduce((a,b)=>a+b))
        }
    }
    
    const answer = new Set(empty)
    return answer.size;
}

// 무식한 구현방법은 기본 배열에 앞뒤로 복사배치 후 구하는 것
// 순환형 링크드리스트?

// 원소 갯수 입력하는 함수로 만들것인지
// 바로 순회하면서 배열에 넣을 것인지

// 순회 수는 항상 입력 배열의 길이 수와 같음