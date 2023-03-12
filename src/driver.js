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
    console.log(tree.height(tree.root, 12));
    tree.prettyPrint(tree.root);
}
