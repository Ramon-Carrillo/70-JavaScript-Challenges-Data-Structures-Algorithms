const HashTable = require("./custom-hash-table");

const myHashTable = new HashTable();

myHashTable.set("firstName", "John");
myHashTable.set("lastName", "Doe");

// console.log(myHashTable.get("firstName")); // John
myHashTable.remove("firstName");
console.log(myHashTable.get("firstName")); // undefined

// myHashTable.printTable();
