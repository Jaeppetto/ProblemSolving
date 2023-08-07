function solution(number, limit, power) {
    const answer = []
    for(let i=1;i<=number;i++){
        answer.push(getDivision(i))
    }
    return answer.map((el)=>el>limit?power:el).reduce((a,b)=>a+b);
}

function getDivision(num){
    const dst = []
    for(let i=1;i<=Math.sqrt(num);i++){
        if(num%i===0) {
            dst.push(i)
            if(num/i !=i) dst.push(num/i)
        }
    }
    return dst.length
}