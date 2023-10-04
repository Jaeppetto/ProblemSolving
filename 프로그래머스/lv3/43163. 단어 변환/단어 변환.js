function solution(begin, target, words) {
    const visited = new Set();
    visited.add(begin);
    
    // 큐 초기화 (시작단어, 카운트, 방문여부)
    const queue = [[begin,0,visited]];

    while (queue.length !==0) {
        const [currentWord, count, visited] = queue.shift();
        if (currentWord === target) return count;
        
        for (let i = 0; i < words.length; i++) {
            const nextWord = words[i];
            if (!visited.has(nextWord) && change(currentWord, nextWord)) {
                visited.add(nextWord);
                queue.push([nextWord, count + 1,visited]);
            }
        }
    }
    return 0;
}

function change(currentWord, nextWord){
    const length = currentWord.length
    let differCount = 0
    
    for(let i=0;i<length;i++){
        if(currentWord[i]!==nextWord[i]) differCount++
        if(differCount>1) return false
    }
    return true
}

// '최소' 몇 단계의 과정인지? -> 최단거리 -> BFS(Queue)
// 계속 Queue에 집어넣을건데, 방문처리를 해줘야 할 듯 함 -> 파생되는 함수마다, 있는지 없는지 여부만 판단하면 되기 때문에 Set으로
// 방문하지 않은 원소 중, 하나만 바꿔서 만들 수 있는 문자를 찾아 -> change 함수
