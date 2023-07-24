function solution(arr1, arr2) {
    var answer = []
    
    arr1.forEach((el1,idx1)=>{
        const dst = []
        el1.forEach((el2,idx2)=>{
            dst.push(arr1[idx1][idx2]+arr2[idx1][idx2])
        })
        answer.push(dst)
    })
    return answer;
}