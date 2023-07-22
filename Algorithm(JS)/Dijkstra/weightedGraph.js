class weightedGraph {
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
}
