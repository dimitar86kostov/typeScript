"use strict";
// You are given the generic interface CountableSet<T>, 
// which keeps track of unique items and their count (The set shouldn’t keep multiple copies, 
// instead just manage a counter for each item).
class CountedSet {
    items = new Map();
    add(item) {
        let currentItem = this.items.get(item);
        if (currentItem) {
            this.items.set(item, currentItem + 1);
        }
        else {
            this.items.set(item, 1);
        }
    }
    remove(item) {
        let currentItem = this.items.get(item);
        if (currentItem) {
            this.items.set(item, currentItem - 1);
        }
    }
    contains(item) {
        let currentItem = this.items.get(item);
        return currentItem !== undefined && currentItem > 0;
    }
    getNumberOfCopies(item) {
        return this.items.get(item) ?? 0;
    }
}
let codesCounterSet = new CountedSet();
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
//# sourceMappingURL=02.js.map