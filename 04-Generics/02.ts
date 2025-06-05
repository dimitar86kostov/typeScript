// You are given the generic interface CountableSet<T>, 
// which keeps track of unique items and their count (The set shouldn’t keep multiple copies, 
// instead just manage a counter for each item).

// Your task is to create a class CountedSet<T> that implements the CountableSet<T> interface, using the following logic:

// · add(item:T) – if item T is not in the set – add it and set count to 1, otherwise just increment its counter.

// · remove(item: T) – if item T is not in the set or is but has count 0 – does nothing. If the item is in the set and has count > 0, decrement the counter.

// · contains(item: T) – if item exists in the set and has a count > 0 – returns true, otherwise returns false.

// · getNumberOfCopies(item: T) – returns the number of copies of the item in the set, if the item doesn’t exist in the set returns 0.


interface CountableSet<T> {


    add(item: T): void;

    remove(item: T): void;

    contains(item: T): boolean;

    getNumberOfCopies(item: T): number;

}

class CountedSet<T> implements CountableSet<T> {

    private items: Map<T, number> = new Map();


    add(item: T): void {
        let currentItem = this.items.get(item);

        if (currentItem) {
            this.items.set(item, currentItem + 1);
        } else {
            this.items.set(item, 1);

        }
    }

    remove(item: T): void {
        let currentItem = this.items.get(item);

        if (currentItem) {
            this.items.set(item, currentItem - 1);
        }
    }

    contains(item: T): boolean {
        let currentItem = this.items.get(item);

        return currentItem !== undefined && currentItem > 0;
    }

    getNumberOfCopies(item: T): number {

        return this.items.get(item) ?? 0;
    }
}

let codesCounterSet = new CountedSet<200 | 301 | 404 | 500>();

codesCounterSet.add(404);

codesCounterSet.add(200);

console.log(codesCounterSet.contains(404));

console.log(codesCounterSet.getNumberOfCopies(200));


// let countedSet = new CountedSet<string>();

// countedSet.add('test');

// countedSet.add('test');

// console.log(countedSet.contains('test'));

// console.log(countedSet.getNumberOfCopies('test'));

// countedSet.remove('test')

// countedSet.remove('test')

// countedSet.remove('test')

// console.log(countedSet.getNumberOfCopies('test'));

// console.log(countedSet.contains('test'));