function solution(n) {
    var dst = n.toString(3).split('').reverse().join(',').replaceAll(',','').toString()
    return parseInt(dst,3);
}