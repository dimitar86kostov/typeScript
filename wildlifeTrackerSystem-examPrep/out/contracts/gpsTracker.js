"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GPSTracker = void 0;
// import { delayDecorator } from '../decorators';
class GPSTracker {
    zone;
    coords;
    constructor(zone = 'savanna', coords = '0.0,0.0') {
        this.zone = zone;
        this.coords = coords;
    }
    // @delayDecorator
    getCoordinates() {
        return `${this.zone}:${this.coords}`;
    }
}
exports.GPSTracker = GPSTracker;
//# sourceMappingURL=gpsTracker.js.map