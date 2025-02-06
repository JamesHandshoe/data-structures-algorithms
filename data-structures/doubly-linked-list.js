const DoublyNodeStructure = require('./doubly-node-structure');

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new DoublyNodeStructure(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        const currTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = currTail.prev;
            this.tail.next = null;
            currTail.prev = null;
        }
        this.length--;
        return currTail;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }
        const oldHead = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            this.oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        const newNode = new DoublyNodeStructure(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const currHead = this.head;
            currHead.prev = newNode;
            newNode.next = currHead;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        } else if (index <= Math.floor(this.length / 2)) {
            let count = 0;
            let current = this.head;
            while (count != index) {
                current = current.next;
                count++;
            }
        } else {
            let count = this.length - 1;
            let current = this.tail;
            while (count != index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index, val) {
        const node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        const node = new DoublyNodeStructure(val);
        
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            return !!this.unshift(val);
        }
        if (index === this.length) {
            return !!this.push(val);
        }
        const prevNode = this.get(index - 1);
        const nextNode = prevNode.next;

        prevNode.next = node;
        node.prev = prevNode;
        node.next = nextNode;
        nextNode.prev = node;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === 0) {
            return !!this.shift()
        }
        if (index === this.length - 1) {
            return !!this.pop();
        }
        const nodeToRemove = this.get(index);
        const prevNode = nodeToRemove.prev;
        const nextNode = nodeToRemove.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        nodeToRemove.next = null;
        nodeToRemove.prev = null;
        this.length--;
        return nodeToRemove;
    }
}