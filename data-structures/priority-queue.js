// helper class for managing priority and value for PQ
class NodeStructure {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

/**
 * Priority Queue
 * - A data structure where each element has a priority
 * - Elements with higher priorities are served
 *   before elements with lower priorties
 * - For this example we will use a MinBinaryHeap
 */
 class PriorityQueue {
    constructor() {
        this.values = [];
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element.priority >= parent.priority) {
                break;
            }
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let rightChild;
            let leftChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if (
                        (swap === null && rightChild.priority < element.priority) ||
                        (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) {
                break;
            }

            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }

    enqueue(val, priority) {
        const newNode = new NodeStructure(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
        return this.values;
    }

    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
}

const ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);

ER.dequeue();
console.log(ER.values);