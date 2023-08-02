function solution(arr) {
    const length = arr.length
    const answer = arr.reduce((a,b)=>lcm(a,b))
    return answer;
}

function gcd(a,b){
    if(b===0) return a
    return gcd(b,a%b)
}

function lcm(a,b){
    return (a*b) / gcd(a,b)
}