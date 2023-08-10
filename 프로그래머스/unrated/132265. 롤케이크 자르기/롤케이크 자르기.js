function solution(topping) {
    let answer = 0;
    const leftMap = new Map(), rightMap = new Map()
    
    topping.forEach((el)=>{
        const getValue = leftMap.get(el)
        getValue?leftMap.set(el,getValue+1):leftMap.set(el,1)
    })
    
    while(topping.length>0){
        const pop = topping.pop()
        const getRight = rightMap.get(pop)
        const getLeft = leftMap.get(pop)
        
        getRight?rightMap.set(pop,getRight+1):rightMap.set(pop,1)
        leftMap.set(pop,getLeft-1)
        
        if(getLeft-1===0) leftMap.delete(pop)
        if(leftMap.size===rightMap.size) answer+=1
    }
    return answer;
}

// 배열 한 번 순회하면서, 한 번씩 다 잘라봐
// 잘린 좌, 우 배열을 집합 구조로 변환, 고유한 상태에서 사이즈를 비교
// 같으면 result++