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

  BFS(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    while (queue.length) {
      currentVertex = queue.shift;
      result.push(currentVertex);

      // 수평 정방향
      // this.adjList[currentVertex].forEach((neighbor) => {

      // 수평 역순
      this.adjList[currentVertex]
        .slice()
        .reverse()
        .forEach((neighbor) => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
          }
        });
    }
    return result;
  }
}
