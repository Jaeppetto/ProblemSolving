// 1. 최단거리? BFS(queue)
// 2. 이동 시마다 Score 계산 후 목표지점 도달 시의 Score 반환

function solution(maps) {
    const dx = [0,0,1,-1]
    const dy = [1,-1,0,0]
    const queue = [[0,0,1]]
    
    while(queue.length>0){
        let [currentX,currentY,score] = queue.shift()
        const height = maps.length-1
        const width = maps[0].length-1
        
        // 목표 지점 도달 시 Score 반환
        if(currentX === width && currentY ===height) return score
        
        for(let i=0;i<4;i++){
            const nextX = currentX + dx[i]
            const nextY = currentY + dy[i]
            
            // 이동하려는 좌표가 맵 안에 있고, 유효한 길인 경우 이동
            if(nextX >=0 && nextY >=0 && nextX <= width && nextY <= height && maps[nextY][nextX] === 1){
                // 이동할 좌표 방문 표시 후 큐에 추가
                maps[nextY][nextX] = 0
                queue.push([nextX,nextY,score+1])
            }
        }
    }
    return -1
}