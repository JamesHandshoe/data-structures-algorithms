class TreeNodeStructure {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new TreeNodeStructure(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        } 
        let current = this.root;
        while (true) {
            if (val === current.value) {
                return undefined;
            }
            if (val < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                } 
                current = current.left;
            } else if (val > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(val) {
        if (!this.root) {
            return false;
        }

        let current = this.root;
        let found = false;
        while (current && !found) {
            if (val < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) {
            return undefined;
        }
        return current;
    }

    // BFS will visit the nodes horizontally
    breadthFirstSearch() {
        const data = [];
        const queue = [];
        let node = this.root;
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            // data.push(node);
            data.push(node.value);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return data;
    }

    // DFS which visits the left side first
    // then will visit the right side
    // Node first are visited then children
    depthFirstSearchPreOrder() {
        const data = [];
        // helper function
        function traverse(node) {
            data.push(node.value);
            // data.push(node);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root);
        return data;
    }

    depthFirstSearchPostOrder() {
        const data = [];
        
        // helper function
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            // data.push(node);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }

    depthFirstSearchInOrder() {
        const data = [];

        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            // data.push(node);
            data.push(node.value);
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root);
        return data;
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.breadthFirstSearch());
console.log(tree.depthFirstSearchPreOrder());
console.log(tree.depthFirstSearchPostOrder());
console.log(tree.depthFirstSearchInOrder());


/** NOTES
 * 
 * BFS vs DFS - which is better
 * When there are lots of nodes to track the space complexity
 * of BFS vs DFS is significant
 * DFS is preferred when the tree is wider than deep
 * 
 * BFS is preferred when the tree is deeper than wide
 * 
 * DFS InOrder will return the tree in order
 * 
 * DFS PreOrder will return an export of a tree structure that is
 * easily reconstructed or copied
 * 
 * 
 */

/** RECAP on TREES
 * Trees are non linear data structures that contain a root
 * and child nodes
 * 
 * Binary trees can have values of any type, but at most
 * two children for each parent
 * 
 * Binary Search Trees are a more specific version of binary
 * trees where every node to the left of the parent is less 
 * than it's value and every node to the right is greater
 * 
 * Trees are searchable using BFS and DFS
 * 
 */
