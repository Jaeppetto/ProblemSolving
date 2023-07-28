function solution(s) {
// while문으로, 0 제거하는 함수와 진법 변환함수를 모듈로 불러와
//     한 번 불러올 때마다 카운터 +1
    let cnt=0
    let trimed=0
    
    while(s!=='1'){
        cnt+=1
        const prevLength = s.length
        const nowLength = s.replace(/0/gi,'').length
        
        trimed+=prevLength-nowLength
        s=nowLength.toString(2)
    }
    return [cnt, trimed];
}