function solution(N, number) {
    const dp = Array(9).fill(0).map(v => new Set());
    
    for(let i=1; i<9; i++){
        dp[i].add(Number(String(N).repeat(i)));
        
        for(let j=1; j<i; j++){
            // dp[7] = dp[1] + dp[6] or dp[2] + dp[5] or dp[3] + dp[4]
            for(const currentVal of dp[j]){
                for(const opponentVal of dp[i-j]){
                    dp[i].add(currentVal+opponentVal);
                    dp[i].add(currentVal-opponentVal);
                    dp[i].add(currentVal*opponentVal);
                    dp[i].add(currentVal/opponentVal);
                }
            }
        }
        if(dp[i].has(number)) return i;
    }
    return -1;
}
