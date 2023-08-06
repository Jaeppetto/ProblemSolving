function solution(clothes) {
    var answer = 1;
    const map = new Map()
//     각 항목에서, 항목 별 0개 혹은 1개를 선택하여 조합하는 경우의 수
    for([clothe, type] of clothes){
        const amount = map.get(type)
        amount?map.set(type,amount+1):map.set(type,1)
    }
    map.forEach((val,key)=>{
        console.log(val,key)
        answer*=(val+1)
    })
    return answer-1;
}