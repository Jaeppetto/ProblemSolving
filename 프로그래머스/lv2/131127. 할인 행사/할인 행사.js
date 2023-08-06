function solution(want, number, discount) {
    var answer = 0;
//     1. want, number 배열 Map으로 바인딩
    const wantMap = new Map()
    want.forEach((el,idx)=>{
        wantMap.set(el,number[idx])
    })

//     2. 10개씩 자르며 Map에 바인딩
    for(let i=0;i<=discount.length-10;i++){
        const dst = discount.slice(i,i+10)
        const discountMap = new Map()
        
        dst.forEach((el,idx)=>{
            const amount = discountMap.get(el)
            amount?discountMap.set(el,amount+1):discountMap.set(el,1)
        })
        
//         3. 두 Map 비교
        const tmp = []
        wantMap.forEach((val,key)=>{
            wantMap.get(key)<=discountMap.get(key)?tmp.push(true):tmp.push(false)
        })
        if(tmp.every((el)=>el===true))answer+=1
    }
    return answer;
}

// 모든 경우의 수를 담아야 하기 때문에, 한 번씩의 순회는 불가피
// 첫째 날부터 discount-10일까지 10개 씩 Slicing하여
// Map을 사용하면 좋을 듯 함
// 두 가지 Map을 비교하여, discount 맵의 값들이 want 맵의 값들과 같거나 더 큰 경우, 카운트