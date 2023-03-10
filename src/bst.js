import { mergeSortRecursion, removeDuplicates } from "./merge";

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
            return root = new Node(key);
        }

        if(root.data < key) {
            root.right = this.insert(root.right, key);
        } else {
            root.left = this.insert(root.left, key);
        }

        return root;
    }

    //accepts a value to delete
    delete() {
        //
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
}

const tree = new Tree([1,2,3,4,5]);
console.log(tree.insert(tree.root, 15))

//bst visual
const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

prettyPrint(tree.root);


