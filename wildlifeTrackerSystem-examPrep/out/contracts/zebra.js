"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zebra = void 0;
class Zebra {
    zones = new Set(['savanna']);
    isCompatibleZone(zone) {
        return this.zones.has(zone);
    }
}
exports.Zebra = Zebra;
//# sourceMappingURL=zebra.js.map