function solution(ingredient) {
    let answer = 0
    let stack = []
    
    ingredient.forEach((inner)=>{
        stack.push(inner)
        const length = stack.length
        
        if(stack[length-4] === 1 && stack[length-3] === 2 &&  stack[length-2] === 3 && stack[length-1] === 1){
            
            for(let i=0;i<4;i++){
                stack.pop()
            }
            answer++
         } 
    })
    return answer
}