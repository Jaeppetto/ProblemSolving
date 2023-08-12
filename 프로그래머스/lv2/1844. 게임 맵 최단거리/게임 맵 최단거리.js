function solution(maps) {
    let answer = -1;
    
    const dx = [0,0,1,-1]
    const dy = [1,-1,0,0]    
    const height = maps.length
    const width = maps[0].length
    
    const queue = [{coorY:0,coorX:0,count:1}]

    while(queue.length !== 0){
        const {coorY,coorX,count} = queue.pop()

        for(let i=0;i<4;i++){
            const newCoorY = coorY + dx[i]
            const newCoorX = coorX + dy[i]

            if(coorY === height-1 && coorX === width - 1){
                answer = count
                return answer
            }

            if(newCoorY >=0 && newCoorY < height && newCoorX >=0 && newCoorX < width && maps[newCoorY][newCoorX] === 1){
                maps[newCoorY][newCoorX] = 0
                queue.unshift({coorY:newCoorY, coorX:newCoorX, count : count+1})
            }
        }
    }

    return answer;
}