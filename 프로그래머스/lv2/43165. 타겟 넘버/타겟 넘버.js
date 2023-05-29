function solution(numbers, target) {
    var answer = 0;
    
    function DFS(index,currentSum){
        if(index === numbers.length){
            if(currentSum === target) answer+=1
        return
        }
        DFS(index+1,currentSum + numbers[index])
        DFS(index+1,currentSum - numbers[index])
    }
    DFS(0,0)
    
    return answer;
}