function solution(X, Y) {
    const answer = []
    const arrX = new Array(10).fill(0)
    const arrY = new Array(10).fill(0)
    
//     원소별 히스토그램
    X.split('').forEach(el=>arrX[el]++)
    Y.split('').forEach(el=>arrY[el]++)

    for(let i=9;i>=0;i--){
        const inter = Math.min(arrX[i],arrY[i])
        for(let j=0;j<inter;j++){
            answer.push(i)
        }
    }
    console.log(answer)
    if(answer[0]===0) return "0"
    if(answer.length===0) return "-1"
    return ""+answer.join('')
}
