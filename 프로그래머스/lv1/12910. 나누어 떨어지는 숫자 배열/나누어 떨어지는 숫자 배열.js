function solution(arr, divisor) {
    var answer = [];
    const filtered = arr.filter(el=>el%divisor===0)
    const sorted = filtered.sort((a,b)=>a-b)
    
    return sorted.length?sorted:[-1];
}