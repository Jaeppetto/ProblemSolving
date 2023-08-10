function solution(n, lost, reserve) {
    var answer = 0;
    let arr = new Array(n+1).fill(1)
    arr[0] = NaN
    
    lost.forEach(el=>arr[el]--)
    reserve.forEach(el=>arr[el]++)
    
    arr.forEach((el,idx)=>{
        const leftIdx = idx-1
        const rightIdx = idx+1
        
        if(el===2 && arr[leftIdx]===0){
            arr[leftIdx]++
            arr[idx]--
        }else if(el===2 && arr[rightIdx]===0){
            arr[rightIdx]++
            arr[idx]--
        }
    })
    return arr.filter(el=>el>=1).length;
}

// (여분)에도 없고, (분실)에도 없으면 체육복을 가져온 것 -> 그 수만큼 return++
// (여분)에도 있고, (분실)에도 있으면, 그 학생은 빌려줄 수 없음 -> 그 학생만 return++
// dp?
// n개 배열에서 관리, 값은 옷의 개수임