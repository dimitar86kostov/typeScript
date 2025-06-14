"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aquaticAnimal_1 = require("./aquaticAnimal");
const gpsTracker_1 = require("./contracts/gpsTracker");
const wildlifeTrackerSystem_1 = require("./wildlifeTrackerSystem");
const fish = new aquaticAnimal_1.AquaticAnimal();
const tracker = new gpsTracker_1.GPSTracker('reef', '7.1,12.4');
const system = new wildlifeTrackerSystem_1.WildlifeTrackerSystem(fish, tracker);
system.registerMovement(tracker.getCoordinates());
console.log(system.getMovementCount("Valid"));
// Output: Total movement count: 1
// Decorated class adds "urban" as forbidden
// console.log(system['forbiddenZones']);
// Output: ['industrial', 'military', 'urban']
// Decorated tracker delays output
// const delayed = tracker.getCoordinates();
// Output returns after 2s: "savanna:12.0,34.0"
//# sourceMappingURL=index.js.map