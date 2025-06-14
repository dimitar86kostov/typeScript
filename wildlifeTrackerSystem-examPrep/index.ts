import { AquaticAnimal } from './aquaticAnimal';
import { GPSTracker } from './contracts/gpsTracker';
import { WildlifeTrackerSystem } from './wildlifeTrackerSystem';

const fish = new AquaticAnimal();
const tracker = new GPSTracker('reef', '7.1,12.4');

const system = new WildlifeTrackerSystem<AquaticAnimal, GPSTracker>(fish, tracker);
system.registerMovement(tracker.getCoordinates());

console.log(system.getMovementCount("Valid"));
// Output: Total movement count: 1

// Decorated class adds "urban" as forbidden
// console.log(system['forbiddenZones']);
// Output: ['industrial', 'military', 'urban']

// Decorated tracker delays output
// const delayed = tracker.getCoordinates();

// Output returns after 2s: "savanna:12.0,34.0"
