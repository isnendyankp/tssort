export class Sorter {
  constructor(public collection:) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
         }
      }
    }
  }
}



// - S10-88:Cr8 Sorter.ts file & move all code sorter
// - S10-88:export class sorter
// - S10-88:remove all type annotations
// - S10-88:remove type guard on first loop logic & remove comment
// - S10-88:remove type guard on second loop logic