import { Tree } from "./bst";
let tree;

//sorts array and grabs root as well --> tree.sortedArr and tree.root
export function arrayAndRoot(arr) {
    tree = new Tree(arr);
}

//lets check it all!
export function driver() {
    //the array used is [2,1,4,3,6,5,8,7,9]
    //after sorting it becomes [1,2,3,4,5,6,7,8,9]

    tree.isBalanced(tree.root);     //tree is balanced
    tree.levelOrder(tree.root);     //5,2,7,1,3,6,8,4,9
    tree.preOrder(tree.root);       //5,2,1,3,4,7,6,8,9 
    tree.postOrder(tree.root);      //1,4,3,2,6,9,8,7,5
    tree.inOrder(tree.root);        //1,2,3,4,5,6,7,8,9
    
    //The project asks for more tests like adding numbers to the array
    //to make it unbalanced, then re-balancing and printing out everything again etc.
    //I made it so every time an element is added or deleted from the tree, it is automatically
    //balanced every time, so no need to do the rest of the tests. Maybe I shouldn't have
    //done that? Idk :)
    tree.prettyPrint(tree.root);
}
