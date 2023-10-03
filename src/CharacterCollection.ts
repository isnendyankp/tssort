export class CharacterCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

}

// - Progress:
// - S10-92:Cr8 CharacterCollection class
// - S10-92:cr8 constructor with prop data with type string
// - S10-92:cr8 get length base
// - S10-92:Add return type number to get length
// - S10-92:Add return this.data.length
// - S10-92:cr8 compare method base from NumbersCollection.ts