function solution(keymap, targets) {
    var answer = [];
    
    targets.forEach((string)=>{
        let pushCount = 0
        
        for(const char of string){
            let indexArr = []
            
            keymap.forEach((el)=>{
                if(el.includes(char)) indexArr.push(el.indexOf(char)+1)
            })
            if(indexArr.length===0){
                pushCount=-1
                break;
            }
            pushCount+=Math.min(...indexArr)
        }
        answer.push(pushCount)
    })
    return answer;
}