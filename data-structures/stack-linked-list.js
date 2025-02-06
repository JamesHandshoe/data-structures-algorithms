import NodeStructure from './node-structure';

// Stack data structure implemented with a singly
// linked list
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new NodeStructure(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const prevFirst = this.first;
            this.first = newNode;
            this.first.next = prevFirst;
        }
        return ++this.size;
    }

    pop() {
        if (!this.first) {
            return null;
        }
        const removedNode = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return removedNode.val;
    }
}