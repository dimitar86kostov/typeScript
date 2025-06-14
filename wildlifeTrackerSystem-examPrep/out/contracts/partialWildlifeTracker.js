"use strict";
// import {addZoneDecorator} from "../decorators"
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartialWildlifeTracker = void 0;
// @addZoneDecorator
class PartialWildlifeTracker {
    forbiddenZones = ['industrial', 'military'];
    validMovements = [];
    invalidMovements = [];
    filterMovement(zone) {
        return !this.forbiddenZones.includes(zone);
    }
}
exports.PartialWildlifeTracker = PartialWildlifeTracker;
//# sourceMappingURL=partialWildlifeTracker.js.map