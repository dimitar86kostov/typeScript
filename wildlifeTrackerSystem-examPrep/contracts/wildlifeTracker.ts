export interface WildlifeTracker {
    registerMovement(movement: string): void;
    getAllMovements(): string[];
    getMovementCount(type: 'Valid' | 'Invalid' | 'All'): string;
}

