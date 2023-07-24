function solution(s){
    var answer = '';
    let obj = {}
    
//     바로 드는 생각은 upper / lower 후 순회를 통해 객체 히스토그램 생성
//     p key의 value와 y key의 value가 일치할 경우 참 반환
    
    for(const el of s.toLowerCase()){obj[el]?obj[el]+=1:obj[el]=1}
    return obj['p']===obj['y']?true:false
}