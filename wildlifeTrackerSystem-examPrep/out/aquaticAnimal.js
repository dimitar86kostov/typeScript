"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AquaticAnimal = void 0;
class AquaticAnimal {
    zones = new Set(['reef', 'lake']);
    isCompatibleZone(zone) {
        return this.zones.has(zone);
    }
}
exports.AquaticAnimal = AquaticAnimal;
//# sourceMappingURL=aquaticAnimal.js.map