function solution(x) {
    const sum = x.toString().split('').map((el)=>+el).reduce((a,b)=>a+b)
    return x%sum===0?true:false
}