const NodeStructure = require('./node-structure');

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // add to the end of a linked list
    push(val) {
        const newNode = new NodeStructure(val);
        if (!this.head) {
            // First Node added to the SinglyLinkedList
            // set the head to that node and the tail also
            this.head = newNode;
            this.tail = this.head;
        } else {
            // after the first Node has been added
            // set the previous tail .next to the newNode
            // and the tail to the new Node
            // this will set a new tail and create a pointer
            // to it
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //remove from the end of a linked list
    pop() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        let newTail = current;

        // loop until the end
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        // once at the end make the second to last the tail
        // and sever the connection by setting the tail's next to null
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // remove from the beginning of a linked list
    shift() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        let newHead = current.next;
        this.head = newHead;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return current;
    }

    // add to the beginning of the linked list
    unshift(val) {
        const newNode = new NodeStructure(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        let count = 0;
        let current = this.head;
        if (index < 0 || index >= this.length) {
            return null;
        }
        while (count !== index) {
            current = current.next;
            count++;
        }
        return current;
    }

    // set is an update method
    // will find the node at the index and update the val
    set(index, val) {
        let nodeToUpdate = this.get(index);
        if (!nodeToUpdate) {
            return false;
        }
        nodeToUpdate.val = val;
        return true;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        } else if (index === this.length) {
            this.push(val);
        } else if (index === 0) {
            this.unshift(val);
        } else {
            const newNode = new NodeStructure(val);
            const prevNode = this.get(index - 1);
            const afterNode = this.get(index + 1);
            prevNode.next = newNode;
            newNode.next = afterNode;
            this.length++;
        }
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        if (index === this.length - 1) {
            return this.pop();
        }

        if (index === 0) {
            return this.shift();
        }

        const prevNode = this.get(index - 1);
        const nodeToRemove = prevNode.next;
        prevNode.next = nodeToRemove.next;
        this.length--;
        return nodeToRemove;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next = null;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    taverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    print() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

const newList = new SinglyLinkedList();
// newList.push('Hello');
// newList.push('World');
// newList.push('James Test');
// newList.taverse();
// console.log(newList);
// newList.pop();
// console.log(newList);
// newList.shift();
// console.log(newList);
// newList.unshift('test james');
// console.log(newList);

// console.log(newList.get(2).val);
// newList.set(2, 'James Test Test');
// console.log(newList.get(2).val);
newList.push(100);
newList.push(201);
newList.push(250);
newList.push(350);
// newList.remove(2);
console.log(newList);

newList.reverse();
newList.print();
