"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // All of this only works if collection is number[]
                // if collection is an array of numbers
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                // only going to work if collection is a string
                // if collection is a string, do this logic instead: logic to compare & swap character in string
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
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
// - S10-82:Add void for sort method (no return value on sort method)
// - S10-82:Add call sorter.sort
// - S10-82:checking log for sorter.collection
// - S10-83:Add length which will take the length of the "collection" array.
// - S10-83:cr8 nested for loops with cr8 variable i (In this loop, there is a variable declaration "i" which will serve as an index to access each element in the "collection" array.)
// - S10-83:cr8 another for loops with cr8 variable j
// - S10-83:Add logic if statement for logic index position
// - S10-83:Add leftHand for logic swap
// - S10-83:Add logic take the right hand side & throw it over to the left
// - S10-83:Add logic take the left hand side and throw it over to right 
// - S10-85:Add new type string for collection
// - S10-85:wrapped if statement with another if statement
// - S10-86:Add type guard with instanceof Array
