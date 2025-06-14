// import {addZoneDecorator} from "../decorators"

// @addZoneDecorator
export abstract class PartialWildlifeTracker {
    protected forbiddenZones: string[] = ['industrial', 'military'];
    protected validMovements: string[] = [];
    protected invalidMovements: string[] = [];

    protected filterMovement(zone: string): boolean {
        return !this.forbiddenZones.includes(zone);
    }
}

