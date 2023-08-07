function solution(msg) {
    const answer = []
    const dic = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const map = new Map()
    
    dic.forEach((el,idx)=>{
        map.set(el,idx+1)
    })
    
    let currentInput = ""
    const str = msg.split('')
    
    str.forEach((el,idx)=>{
        const next = str[idx+1]
        currentInput+=el

        if(!map.has(currentInput+next)){
            map.set(currentInput+next,map.size+1)
            answer.push(map.get(currentInput))
            currentInput=""
        }
    })
    return answer
}