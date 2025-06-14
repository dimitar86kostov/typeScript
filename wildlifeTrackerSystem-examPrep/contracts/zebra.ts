import { Animal } from './animal';

export class Zebra implements Animal {
    public readonly zones: Set<string> = new Set(['savanna']);

    isCompatibleZone(zone: string): boolean {
        return this.zones.has(zone);
    }
}

