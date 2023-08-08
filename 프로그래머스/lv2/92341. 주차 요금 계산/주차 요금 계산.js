function solution(fees, records) {
    let dst = [];
    let obj = {}
    const splitted = records.map((el)=>el.split(" "))
    
//     차량 번호와 매칭, 입/출차 기록을 객체 내의 배열로 관리
    splitted.forEach((el,idx)=>{
        obj[el[1]]?obj[el[1]].push([el[0],el[2]]):obj[el[1]]=[[el[0],el[2]]]
    })
    
//     차량 별로 순회하며 입/출차 기록을 한 쌍씩 묶어 요금 계산
//     마지막 기록이 IN인 경우, 임의로 OUT("23:59") 부여
    for(const key in obj){
        let remainTime = 0
        
        obj[key].forEach((history,idx)=>{
            if(history[1]==='IN'){
                const intime = history[0]
                let outtime =''
                
                if(obj[key].length-1===idx) outtime = '23:59'
                else outtime = obj[key][idx+1][0]
                
                remainTime+=getDifferMin(intime,outtime)
            }
        })
        dst.push([fee(remainTime,fees),+key])
    }
    
//     차량 번호 오름차순으로 정렬, 최종적인 비용만 반환
    const answer = dst.sort((a,b)=>a[1]-b[1]).map((el)=>el[0])
    return answer;
}

// 입차 시간과 출력 시간을 입력으로 받아 머무른 시간을 분 단위로 반환
function getDifferMin(input,output) {
    const intime = input.split(":").map((el)=>+el)
    const outtime = output.split(":").map((el)=>+el)
    let minute = 0
    
    if(intime[1]<=outtime[1]){
        minute+= (outtime[1]-intime[1])
        minute+= (outtime[0]-intime[0])*60
    } else {
        minute+= (60-intime[1]+outtime[1])
        minute+= (outtime[0]-intime[0]-1)*60
    }
    return minute
}

// 누적시간(분)을 입력으로 받고, 계산된 요금을 반환
function fee(time,fees){
    const [dTime,dFee,pTime,pFee] = fees
    return time>=dTime?dFee + Math.ceil((time-dTime)/pTime)*pFee:dFee
}