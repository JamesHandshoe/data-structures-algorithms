class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        // in the "real world" would need some
        // error handling or GUID or hashing to
        // map this for duplicatess
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
        return this.adjacencyList;
    }

    removeVertex(vertex) {
        this.adjacencyList[vertex].forEach(edge => this.removeEdge(vertex, edge));
        delete this.adjacencyList[vertex];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(edge => edge !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(edge => edge !== vertex1);
    }

    // DFS of graphs will visit the neighbors of the starting vertex
    // and continue down neighbors until each vertex has
    // been visited
    DFSRecursive(startVertex) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        (function DFS(vertex) {
            if (!vertex) {
                return null;
            }
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return DFS(neighbor);
                }
            });
        })(startVertex);
        return result;
    }

    DFSIterative(startVertex) {
        let stack = [startVertex];
        const result = [];
        const visited = {};
    
        while (stack.length) {
            const vertex = stack.pop();
            if (!visited[vertex]) {
                visited[vertex] = true;
                result.push(vertex);
                stack = [...this.adjacencyList[vertex]];
                // this.adjacencyList[vertex].forEach(neighbor => stack.push(neighbor));
            }
        }
        return result;
    }

    BFSIterative(startVertex) {
        let queue = [startVertex];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[startVertex] = true;
        
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }

}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.DFSRecursive("A"));
console.log(g.DFSIterative("A"));
console.log(g.BFSIterative("A"));
// original invocation for testing adding vertices and edges
// and removing them.

// g.addVertex("Dallas");
// g.addVertex("Tokyo");
// g.addVertex("Aspen");
// g.addVertex("Los Angeles");
// g.addVertex("Hong Kong")
// g.addEdge("Dallas", "Tokyo");
// g.addEdge("Dallas", "Aspen");
// g.addEdge("Hong Kong", "Tokyo");
// g.addEdge("Hong Kong", "Dallas");
// g.addEdge("Los Angeles", "Hong Kong");
// g.addEdge("Los Angeles", "Aspen");

// console.log(g.adjacencyList);
// g.removeVertex('Hong Kong');
// console.log(g.adjacencyList);