const { LinkedList } = require("./linked-list");

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);

// list.insertAt(2, 5);
list.removeAt(2); // 1, 2, 4

// console.log(list.get(2)); // 3
list.printAll(); // 1, 2, 5, 3, 4
