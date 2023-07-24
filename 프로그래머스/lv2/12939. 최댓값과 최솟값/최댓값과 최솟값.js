function solution(s) {
    var answer = '';
    var arr = s.split(" ")
    arr = arr.map((el)=>+el)
    
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    
    return `${min} ${max}`;
}