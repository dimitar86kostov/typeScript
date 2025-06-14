import { Tracker } from './tracker';
// import { delayDecorator } from '../decorators';

export class GPSTracker implements Tracker {
    private zone: string;
    private coords: string;
    
    constructor(zone: string = 'savanna', coords: string = '0.0,0.0') {
        this.zone = zone;
        this.coords = coords;
    }
    
    // @delayDecorator
    getCoordinates(): string {
        return `${this.zone}:${this.coords}`;
    }
}

