function solution(sequence, k) {
    let answer = []
    let sum = 0
    let head = 0
    
    for(let i=0;i<sequence.length;i++){
        sum+=sequence[i]
        if(sum>k) while(sum>k) sum-=sequence[head++]
        if(sum===k) answer.push([head,i])
    }
    
    let min = sequence.length
    answer.sort((a,b)=>(a[1]-a[0])-(b[1]-b[0]))

    return answer[0]
}

// 큐를 통해 총합을 관리하면 될 듯
// 큐 합이 k보다 작을 경우 sequence에서 계속 shift해오고, -> outputidx++
// 넘어서는 경우 큐를 shift, 일치하는 경우의 인덱스를 반환 -> inputidx++
// inputIndex와 outputIndex를 계산해주면 될 듯

// 어차피 한 번은 순회해야함 (O(n)), 순회하며 최소값을 갱신해주면 될 듯