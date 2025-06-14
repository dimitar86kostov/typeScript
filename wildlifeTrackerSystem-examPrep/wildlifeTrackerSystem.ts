import { PartialWildlifeTracker } from "./contracts/partialWildlifeTracker";
import { WildlifeTracker } from "./contracts/wildlifeTracker";
import { Animal } from "./contracts/animal";
import { Tracker } from "./contracts/tracker";

export class WildlifeTrackerSystem<TAnimal extends Animal, TTracker extends Tracker> extends PartialWildlifeTracker implements WildlifeTracker {

    private animal: TAnimal;
    private tracker: TTracker;

    constructor(animal: TAnimal, tracker: TTracker) {
        super();
        this.animal = animal;
        this.tracker = tracker;
    }

    registerMovement(movement: string): void {
console.log(movement);

        const [zone, coords] = movement.split(':');
        if (!zone || !coords) return


        if (!this.filterMovement(zone)) {
            this.invalidMovements.push(movement);
            return;
        }

        if (this.animal.isCompatibleZone(zone)) {
            this.validMovements.push(movement);

        } else {
            this.invalidMovements.push(movement);
        };
    }

    getAllMovements(): string[] {
        return [...this.validMovements];
    }

    getMovementCount(type: "Valid" | "Invalid" | "All"): string {

        let total = 0;

        switch (type) {
            case "Valid": total = this.validMovements.length; break
            case "Invalid": total = this.invalidMovements.length; break
            case "All": total = this.validMovements.length + this.invalidMovements.length; break
        }

        return `Total movement count: ${total}`
    }


}
