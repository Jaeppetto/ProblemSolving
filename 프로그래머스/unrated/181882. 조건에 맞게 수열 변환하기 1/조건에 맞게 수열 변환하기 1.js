function solution(arr) {
    var answer = [];
    return arr.map(el=>{
        if(el>=50 && el%2===0){
            return el/2
        } else if (el<50 && el%2===1){
            return el*2
        } else{
            return el
        }});
}