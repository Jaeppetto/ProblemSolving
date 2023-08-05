function solution(citations) {
    var answer = citations.length;
    
    for(answer;answer>=0;answer--){
        const filter = citations.filter((el)=>el>=answer)
        
        if(filter.length>=answer) return answer
    }
}