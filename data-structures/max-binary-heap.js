class MaxBinaryHeap {
    constructor() {
        // initialized with some data
        // normally this would be initialized as an empty []
        this.values = [];
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element <= parent) {
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
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if (
                        (swap === null && rightChild > element) ||
                        (swap !== null && rightChild > leftChild)
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

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
        return this.values;
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
}

const heap = new MaxBinaryHeap();
// console.log(heap.insert(55));
// console.log(heap.insert(1));
// console.log(heap.insert(45));
// console.log(heap.insert(199));

[41, 39, 33, 18, 27, 12, 55].forEach(val => heap.insert(val));
console.log(heap);
console.log(heap.extractMax());
console.log(heap);