class Graph {
  constructor() {
    this.adjList = {};
  }
  addVertex(key) {
    if (!this.adjList[key]) this.adjList[key] = [];
  }

  addEdge(v1, v2) {
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }

  removeVertex(vertex) {
    while (this.adjList[vertex].length) {
      const adjVertex = this.adjList[vertex].pop();
      this.removeEdge(vertex, adjVertex);
    }
    delete this.adjList[vertex];
  }

  removeEdge(v1, v2) {
    this.adjList[v1] = this.adjList[v1].filter((v) => v !== v2);
    this.adjList[v2] = this.adjList[v2].filter((v) => v !== v1);
  }

  // 재귀적 깊이 우선 그래프 순회
  DFSR(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjList;

    (function DFS(vertex) {
      if (!vertex) return null;
      // 정점 방문 처리 및 결과 리스트에 삽입
      visited[vertex] = true;
      result.push(vertex);

      // 해당 정점의 방문하지 않은 인접점
      adjacencyList[vertex].forEach((neighbor) => {
        // 방문 리스트에 해당 정점 정보가 없다면
        // (= 아직 방문하지 않는 정점이라면)
        if (!visited[neighbor]) {
          return DFS(neighbor);
        }
      });
    })(start);
    return result;
  }

  DFSI(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      // 인접점 방문
      this.adjList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
}
