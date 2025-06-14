export interface Animal {
    readonly zones: Set<string>;
    isCompatibleZone(zone: string): boolean;
}

