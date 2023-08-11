function solution(n, computers) {
    var answer = 0;
    let arr = []
    
    computers.forEach((el,idx)=>{
        let obj = {idx:idx, connection:[],state:'unconnected'}
        el.forEach((e,i)=>{
            if(idx!==i && e===1) obj.connection.push(i)
        })
        arr.push(obj)
    })
    
    arr.forEach((node)=>{     
        if(node.state === 'unconnected'){
            const stack = [node]
            while(stack.length>0){
                const {idx,connection,state} = stack.pop()
                connection.forEach((connect)=>{
                    if(arr[connect].state==='unconnected'){
                        arr[connect].state = 'connected'
                        stack.push(arr[connect])
                    }
                })
            }
            answer++
        }
    })
    return answer
}

// 연결이 끊길 때까지의 counter을 세라
// 만약, [1][2]부터 시작한다고 하자 [n-1][n]까지 돌면서 묶여있는 그룹을 찾는 것
// 그룹을 묶으며 그 그룹이 끊길 때마다 ++하고, 그룹에 속한 노드들은 방문처리
// 다음 미방문 처리된 노드에 가서 해당 과정을 반복, 그룹을 지어 카운트하고, 방문처리
// 그렇게 묶은 그룹 수와, 방문 배열에서 false 갯수를 더한 최종 결과를 반환
// DFS(STACK)

// 한 번의 DFS 함수에서 한 그룹을 찾고, 그 그룹의 마지막 노드의 다음 노드와 그 다음 노드를 새로운 입력으로 재귀
