function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    const truck_amount = truck_weights.length
    
    const bridge = new Array(bridge_length).fill(0)
    const crossed = []
    
    while(crossed.length!==truck_amount){
//         각 트럭의 시간을 관리해야겠네
//         다리는 건너는 트럭 배열의 인덱스와 다리에 있는 시간 인덱스를 동기화시켜야 할 듯 함
//         의식적으로 인덱스를 맞추려하지 않아도 되고, shift, push만 같이 해주면 될 듯
        time++
        const pop = bridge.shift()
        if(pop!==0) crossed.push(pop)
//         용량 허용치면 대기 트럭을 다리에 추가
//         허용치가 아니면 0을 다리에 추가
        const weightSum = bridge.reduce((a,b)=>a+b)
        
        if(weightSum + truck_weights[0] <= weight){
            bridge.push(truck_weights.shift())
        }else{
            bridge.push(0)
        }
    }
    return time;
}