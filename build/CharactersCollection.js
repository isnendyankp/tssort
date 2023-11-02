"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        // seperate strting to array
        const characters = this.data.split('');
        // swap to characters left and right index
        const leftHand = characters[leftIndex];
        // characters[leftIndex] into characters[rightIndex]
        characters[leftIndex] = characters[rightIndex];
        //  restore leftHand into characters[rightIndex]
        characters[rightIndex] = leftHand;
        // update this.data with this new string
        this.data = characters.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
// - Progress:
// - S10-92:Cr8 CharacterCollection class
// - S10-92:cr8 constructor with prop data with type string
// - S10-92:cr8 get length base
// - S10-92:Add return type number to get length
// - S10-92:Add return this.data.length
// - S10-92:cr8 compare method base from NumbersCollection.ts
// - S10-92:change return with adding .toLowerCase()
// - S10-92:Adding greater than with adding rightIndex for compare method
// - S10-92:Fixing compare method
// - S10-92:cr8 swap method base
// - S10-92:Add return type void @swap method
// - S10-92:Add 2 compare params for swap method
// - S10-92:cr8 characters for seperate string to array
// - S10-92:cr8 leftHand for equal to characters[leftIndex]
// - S10-92:swap characters[leftIndex] to characters[rightIndex]
// - S10-92:restore leftHand to characters[rightIndex]
// - S10-92:update this.data with characters.join('')
