"use strict";
function visitFloor(floor) {
    switch (floor.number) {
        case 1:
            floor.train();
            return;
        case 2:
            floor.dine();
            return;
        case 3:
            floor.sleep();
            return;
    }
}
visitFloor({ train() { }, number: 1, hallway: 'A', pass: 'Guest' });
visitFloor({ dine() { }, number: 2, hallway: 'A' });
visitFloor({ sleep() { }, number: 3, hallway: 'C' });
visitFloor({ train() { }, number: 1, hallway: 'C' });
visitFloor({ train() { }, number: 1, hallway: 'A' });
visitFloor({ dine() { }, number: 2, hallway: 'A', pass: 'Guest' });
visitFloor({ sleep() { }, number: 3, hallway: 'A' });
visitFloor({ dine() { }, number: 2, hallway: 'C' });
//# sourceMappingURL=05.js.map