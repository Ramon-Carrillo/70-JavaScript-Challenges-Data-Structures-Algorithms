const { Node, depthFirstTraversal } = require("./depth-first-traversal");

// Create a binary tree:      a
//                          /   \
//                         b     c
//                        / \    /
//                       d   e  f

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

const result = depthFirstTraversal(a);
console.log(result); // ["a", "b", "d", "e", "c", "f"]
