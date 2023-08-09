function solution(land) {
    const n = land.length;
    
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < 4; j++) {
            land[i][j] += Math.max(
                land[i - 1][(j + 1) % 4],
                land[i - 1][(j + 2) % 4],
                land[i - 1][(j + 3) % 4]
            );
        }
    }
    console.log(land)
    return Math.max(...land[n - 1]);
}

