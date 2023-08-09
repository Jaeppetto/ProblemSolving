function solution(skill, skillset) {
    const valid = []
    
    skillset.forEach((el,idx)=>{
        const dst = []
        const split = el.split('')
        
        while(split.length!==0){
            const shift = split.shift()
            const shiftIdx = skill.indexOf(shift)
            
            if(shiftIdx!==-1){
                dst.push(shiftIdx)
            }
        }
        valid.push(dst)
    })
    let answer = 0
    let isRight = new Array(valid.length).fill(true)
    valid.forEach((element,idx)=>{
        for(let i=0;i<element.length;i++){
            if(element[i]!==i) isRight[idx] = false
            continue
        }
    })
    
    return isRight.filter(el=>el==true).length
}