function solution(n, wires) {
    let answer = 101;
    let adj_list = Array.from({length: n+1}, () => []);
    let in_degree = Array(n+1).fill(0);
    let rank = Array(n+1).fill(1);

    for(let [start, end] of wires) {
        adj_list[start].push(end);
        adj_list[end].push(start);
        in_degree[start] += 1;
        in_degree[end] += 1;
    }

    let Q = [];
    for(let i=1; i<in_degree.length; i++) {
        if(in_degree[i] === 1) {
            Q.push(i);
        }
    }

    while(Q.length) {
        let current = Q.shift();
        answer = Math.min(answer, Math.abs(rank[current]*2-n));

        for(let destination of adj_list[current]) {
            rank[destination] += rank[current];
            in_degree[destination] -= 1;
            if(in_degree[destination] === 1) {
                Q.push(destination);
            }
        }
    }

    return answer;
}