import { Tree } from "./bst";
import { Node } from "./bst";
let tree;

//sorts array and grabs root as well --> tree.sortedArr and tree.root
export function arrayAndRoot(arr) {
    tree = new Tree(arr);
}

//lets check it all!
export function driver() {
    tree.isBalanced(tree.root);
    tree.insert(tree.root, 21);
    tree.insert(tree.root, 25);
    tree.insert(tree.root, 26);
    tree.insert(tree.root, 78);
    tree.insert(tree.root, 281);
    tree.prettyPrint(tree.root);
}
