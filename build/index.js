"use strict";
// console.log('123');
// var logSomething = function () {
//   console.log('something');
// };
// logSomething();
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
// progres:
// - S10-79:cr8 index js by using terminal: tsc index.ts
// - S10-79:Organize file 
// - S10-79:configure tsconfig rootDir & outDir
// - S10-79:cr8 another function for make sure continue tsc -w run correctly
// - S10-82:Cr8 base class Sorter
// - S10-82:Add property collection with type number of array
// - S10-82:Define constructor base for input collection
// - S10-82:Add parameter collection on constructor
// - S10-82:Add initialize the collection property
// - S10-82:cr8 instance sorter with initialize array
// - S10-82:cr8 shorthand property constructor
// - S10-82:Delete assigment inside the constructor
// - S10-82:cr8 sort method base
