function solution(s) {
    var center = s.length/2
    var floor = Math.floor(s.length/2)
    
    if(s.length%2===1)return s.substr(floor,1)
    else if (s.length%2===0)return s.substr(center-1,2)
}