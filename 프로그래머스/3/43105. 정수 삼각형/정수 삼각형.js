function solution(triangle) {
    const length = triangle.length
    
    for(let i=length-2;i>=0;i--){
        for(let j=0;j<triangle[i].length;j++){
            triangle[i][j] += Math.max(triangle[i+1][j],triangle[i+1][j+1])
        }
    }
    return triangle[0][0]
}

// i줄에 j번째 숫자라면, i+1줄에 j와 j+1에만 접근할 수 있음
// 피보나치? 바닥부터 올라가며 둘 중 큰 수와 윗층 수를 더해감