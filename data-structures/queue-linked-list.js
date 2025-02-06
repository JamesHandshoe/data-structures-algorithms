import NodeStructure from './node-structure';

// Queues are FIFO
// due to a singly linked list big O notation for removing from
// the end, will add to the end and remove from the beginning
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // add to the end
    enqueue(val) {
        const newNode = new NodeStructure(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    // remove from the beginning
    dequeue() {
        if (!this.first) {
            return null;
        }
        const prevFirst = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return prevFirst;
    }
}