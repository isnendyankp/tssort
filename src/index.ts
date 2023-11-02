import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaayb');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);

// progres:
// - S10-92:import CharactersCollection
// - S10-92:cr8 charactersCollection with new CharactersCollection('Xaayb')
// - S10-92:cr8 sorter with new Sorter(charactersCollection)
// - S10-92:call sorter.sort()
// - S10-92:log charactersCollection.data