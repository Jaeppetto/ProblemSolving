function solution(phone_book) {
    let answer = true
    phone_book.sort()
    for(let i=0;i<phone_book.length-1;i++){
        const current = phone_book[i]
        const strLength = current.length
        const nextSlice = phone_book[i+1].substr(0,strLength)
        
        if(current===nextSlice) return false
    }
    console.log(phone_book)
    return answer;
}

// 일반적으로 생각하면, 배열 순회하며 2단 루프로 비교해보면 됨
// 해시는 무조건 맵과 함께 사용?
// 인덱스를 key로, 전화번호를 value로 갖는 맵 구조 생성
// 배열 순회하면서 현재 요소의 길이