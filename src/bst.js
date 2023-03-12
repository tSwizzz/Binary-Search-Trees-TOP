import mergeSortRecursion from "./merge.js"
import { arrayAndRoot, driver} from "./driver.js";

export class Node {
    constructor(data = null, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

export class Tree {
    constructor(arr) {
        this.sortedArr = mergeSortRecursion(arr);
        this.root = this.buildTree(this.sortedArr, 0, this.sortedArr.length - 1);
    }

    buildTree(sortedArr, start, end) {
        if(start > end) return null;

        const mid = Math.floor((start + end) / 2);
        const root = new Node(sortedArr[mid]);

        root.left = this.buildTree(sortedArr, start, mid - 1);
        root.right = this.buildTree(sortedArr, mid + 1, end);

        return root;
    }

    //accepts a value to insert
    insert(root, key) {
        if(root == null) {
            root = new Node(key);

            //after node is inserted, we re-balance the tree and get a new root
            this.reBalanceInsert(key);
        } else if(root.data < key) {
            root.right = this.insert(root.right, key);
        } else if(root.data > key) {
            root.left = this.insert(root.left, key);
        }
        if(root.data == key) {
            return root;
        }
        return root;
    }

    //accepts a value to delete
    delete(root, key) {
        if(root.data == key) {
            if(root.left == null && root.right == null) {
                root.data = null;
            } else if(root.left == null && root.right != null) {
                root.data = root.right.data;
                root.right = null;
            } else if(root.right == null && root.left != null) {
                root.data = root.left.data;
                root.left = null;
            } else {
                let rootToDelete = root;
                root = root.right;

                while(root.left) {
                    root = root.left;
                }
                rootToDelete.data = root.data;
                root.data = null;
            }
            
            //after node is deleted, we re-balance the tree and get a new root
            this.sortedArr = this.reBalanceDelete(this.sortedArr, key);
            this.root = this.buildTree(this.sortedArr, 0, this.sortedArr.length - 1);
        }

        if(root.data != key) {
            if(root.data < key && root.right != null) {
                this.delete(root.right, key);
            }
            if(root.data > key && root.left != null) {
                this.delete(root.left, key);
            }
        }

        return;
    }

    //accepts a value and returns the node with the given value
    find(root, key) {
        if(root == null || root.data == key) {
            return root;
        }

        if(root.data < key) {
            return this.find(root.right, key);
        } 
        return this.find(root.left, key);
    }

    levelOrder() {
        //do this next :)
    }

    //checks if tree is balanced
    isBalanced(root) {
        let originalRoot = root;
        let lCount = 0;
        let rCount = 0;

        while(root.left) {
            root = root.left;
            lCount++;
        }

        root = originalRoot;

        while(root.right) {
            root = root.right;
            rCount++;
        }

        if(lCount == rCount || lCount - rCount == -1 || lCount - rCount == 1) {
            return console.log("The tree is balanced!");
        }

        return console.log("The tree is not balanced!");
    }

    reBalanceInsert(key) {
        this.sortedArr.push(key);
        this.sortedArr = mergeSortRecursion(this.sortedArr);
        this.root = this.buildTree(this.sortedArr, 0, this.sortedArr.length - 1);
    }

    reBalanceDelete(arr, key) {
        let newArr = [];
        for(let k = 0; k < arr.length; k++) {
            if(arr[k] != key) {
                newArr.push(arr[k]);
            }
        }
        return mergeSortRecursion(newArr);
    }

    //bst visual
    prettyPrint(node, prefix = '', isLeft = true) {
        if (node.right !== null) {
        this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
        this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    }
}
let array = [2,4,6,8,10,12,14];
arrayAndRoot(array);
driver();



