import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
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
// - S10-86:Add if  type guard with type string
// - S10-89:Add import sort class
// - s10-89:Add import number collection
// - S10-89:cr8 new instance of number collection
// - S10-89:Assign variable for new instance
// - S10-89:log numbersCollection.data