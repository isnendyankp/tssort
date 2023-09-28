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
                if (this.collection.compare(j, j + 1)) {
                    const leftHand = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHand;
                }
            }
        }
    }
}
exports.Sorter = Sorter;
// - S10-88:Cr8 Sorter.ts file & move all code sorter
// - S10-88:export class sorter
// - S10-88:remove all type annotations
// - S10-88:remove type guard on first loop logic & remove comment
// - S10-88:remove type guard on second loop logic
// - S10-89:import NumbersCollection
// - S10-89:Pass in NumbersCollection @constructor
// - S10-89:Add comparasion for this collection @if statement
// - S10-89:Add 2 elements for compare method (j, j+1)
