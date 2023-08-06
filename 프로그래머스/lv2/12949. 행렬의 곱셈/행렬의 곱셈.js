function solution(arr1, arr2) {
    var answer = [];
    arr1.forEach((element,idx)=>{
        const dst = []
        for(let i=0;i<arr2[0].length;i++){
            let sum=0
            for(let j=0;j<arr2.length;j++){
                sum+=(element[j]*arr2[j][i])
            }
            dst.push(sum)
        }
        answer.push(dst)
    })
    return answer;
}