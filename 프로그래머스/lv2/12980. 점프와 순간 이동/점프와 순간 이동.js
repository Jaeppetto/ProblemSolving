function solution(n)
{
    let ans = 0;
    let currentLength = 0
    
    while(n!==0){
        if(n%2===1){
            n--;
            ans++;
        } else{
            n/=2
        }
    }
    return ans;
}