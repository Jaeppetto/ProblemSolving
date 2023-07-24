function solution(n) {
    let dst = n.toString().split("").map((el)=>+el)
    dst.sort(function(a,b){return b-a})

    return +dst.join('')
}