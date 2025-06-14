"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WildlifeTrackerSystem = void 0;
const partialWildlifeTracker_1 = require("./contracts/partialWildlifeTracker");
class WildlifeTrackerSystem extends partialWildlifeTracker_1.PartialWildlifeTracker {
    animal;
    tracker;
    constructor(animal, tracker) {
        super();
        this.animal = animal;
        this.tracker = tracker;
    }
    registerMovement(movement) {
        console.log(movement);
        const [zone, coords] = movement.split(':');
        if (!zone || !coords)
            return;
        if (!this.filterMovement(zone)) {
            this.invalidMovements.push(movement);
            return;
        }
        if (this.animal.isCompatibleZone(zone)) {
            this.validMovements.push(movement);
        }
        else {
            this.invalidMovements.push(movement);
        }
        ;
    }
    getAllMovements() {
        return [...this.validMovements];
    }
    getMovementCount(type) {
        let total = 0;
        switch (type) {
            case "Valid":
                total = this.validMovements.length;
                break;
            case "Invalid":
                total = this.invalidMovements.length;
                break;
            case "All":
                total = this.validMovements.length + this.invalidMovements.length;
                break;
        }
        return `Total movement count: ${total}`;
    }
}
exports.WildlifeTrackerSystem = WildlifeTrackerSystem;
//# sourceMappingURL=wildlifeTrackerSystem.js.map