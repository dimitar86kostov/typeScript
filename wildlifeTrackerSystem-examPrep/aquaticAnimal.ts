import { Animal } from "./contracts/animal";

export class AquaticAnimal implements Animal {

    readonly zones: Set<string> = new Set(['reef', 'lake']);

    isCompatibleZone(zone: string): boolean {

        return this.zones.has(zone);
    }

}


