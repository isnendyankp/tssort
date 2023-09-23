export class NumbersCollection {
  constructor(public data: number[]) {}

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  swap(leftIndex: number): void {}
}

// - S10-89:Cr8 base class NumberCollection
// - S10-89:Add prop data with type array number
// - S10-89:cr8 base constructor @NumberCollection class
// - S10-89:Add argument  prop data with type number array @constructor
// - S10-89:Take argument & asssign it too
// - S10-89:modifier data & removing assignment 
// - S10-89:fix w8 removing initialization
// - S10-89:Add define compare base function
// - S10-89:Add type return boolean
// - S10-89:Add 1st argument leftIndex with type number @compare
// - S10-89:Add 2nd argument rightIndex with type number @compare
// - S10-89:Add return conditional code @compare
// - S10-89:Add define swap function base
// - S10-89:Add void for dont receive anything @return swap
// - S10-89:Add param leftIndex with type @swap 