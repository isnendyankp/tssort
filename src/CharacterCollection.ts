export class CharacterCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }
  swap(leftIndex: number, rightIndex: number) void {

  };
}

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