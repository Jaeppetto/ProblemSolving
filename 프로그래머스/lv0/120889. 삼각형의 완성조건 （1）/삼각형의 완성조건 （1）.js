function solution(sides) {
    var answer = 0;
    const maxSide = sides.sort((a,b)=>b-a).shift()
    const restSum = sides.reduce((a,b)=>a+b)
    return maxSide<restSum?1:2;
}