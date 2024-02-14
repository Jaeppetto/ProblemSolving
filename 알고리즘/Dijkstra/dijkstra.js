class PriorityQueue {
  constructor() {
    this.values = {};
  }
  enqueue() {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjList = {};
  }
  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjList[vertex1].push({ node: vertex2, weight });
    this.adjList[vertex2].push({ node: vertex1, weight });
  }

  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    for (let vertex in this.adjList) {
      if (vertex === start) {
        // 처리할 정점이 시작점인 경우
        // 가중합 테이블 초기화 + 우선순위큐 추가
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        // 시작점 외의 정점들
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      // 모든 노드들에 대한 직전 방문 노드 정보를 null로 초기화
      previous[vertex] = null;
    }

    // 방문할 정점이 남아있는 경우 (=큐에 정점들이 남아있으면), 반복
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // Dequeue 노드가 끝점 노드라면, 루프 탈출
        console.log(distances);
        console.log(previous);
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
      }
      // Dequeue 노드의 거리 테이블이 초기값이 아닌 경우
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjList[smallest]) {
          // Dequeue 노드의 인접점 찾기
          let nextNode = this.adjList[smallest][neighbor];
          console.log(nextNode);

          // 인접점들에 대한 새로운 거리 계산
          // candidate = 현재 노드에 대해 갖고 있는 가중합 거리 + 인접점에 대한 거리
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;

          // 다음 방문할 노드에 대한 가중합들을 미리 계산
          // 현재 가중합 값보다 candidate (예비) 값이 더 작다면,
          // candidate를 새로운 최단거리 정보로 갱신해야 함
          // - 다음 인접점의 거리 테이블 && 직전 노드 정보를 갱신
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            // 선택된 노드에 대해 새로운 가중합 부여
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    console.log(path);
    return path.concat(smallest).reverse();
  }
}
