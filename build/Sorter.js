"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
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
                    // collection === number[]
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                // only going to work if collection is a string
                // if collection is a string, do this logic instead: logic to compare & swap character in string
                if (typeof this.collection === 'string') {
                }
            }
        }
    }
}
exports.Sorter = Sorter;
// - S10-88:Cr8 Sorter.ts file & move all code sorter
// - S10-88:export class sorter
// - S10-88:remove all type annotations
