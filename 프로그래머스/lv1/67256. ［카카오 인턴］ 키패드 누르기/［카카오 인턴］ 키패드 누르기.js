function solution(numbers, hand) {
    let answer = '';
    let [rowLeft,colLeft] = [3,0]
    let [rowRight,colRight] = [3,2]
    const keypad = {
        1:[0,0],
        2:[0,1],
        3:[0,2],
        4:[1,0],
        5:[1,1],
        6:[1,2],
        7:[2,0],
        8:[2,1],
        9:[2,2],
        0:[3,1]
    }
    
    numbers.forEach((number,idx)=>{
        const [targetRow,targetCol] = keypad[number]
        
        if(number===1 || number===4 || number ===7){
            [rowLeft,colLeft]=keypad[number]
            answer+='L'
        } else if(number===3 || number===6 || number===9){
            [rowRight,colRight]=keypad[number]
            answer+='R'
        } else{
            // 중간에 있는 키패드일 경우
//             거리 계산하여 가까운 손 변수에 값을 갱신
//             거리 동일할 경우 hand에 맞춰 갱신
            const leftDistance = calDistance(rowLeft,colLeft,targetRow,targetCol)
            const rightDistance = calDistance(rowRight,colRight,targetRow,targetCol)
            
            if(leftDistance > rightDistance){
                [rowRight,colRight]=keypad[number]
                answer+='R'
            } else if (leftDistance < rightDistance){
                [rowLeft,colLeft]=keypad[number]
                answer+='L'
            } else{
                if(hand==='right'){
                    [rowRight,colRight]=keypad[number]
                    answer+='R'
                }else if(hand==='left'){
                    [rowLeft,colLeft]=keypad[number]
                    answer+='L'
                }
            }
        }
    })
    return answer;
}

function calDistance(originRow,originCol,targetRow,targetCol){
    const rowDistance = Math.abs(originRow-targetRow)
    const colDistance = Math.abs(originCol-targetCol)
    return rowDistance + colDistance
}