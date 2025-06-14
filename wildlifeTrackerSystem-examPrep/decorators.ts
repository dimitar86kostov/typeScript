// export function delayDecorator(target: object, methodName: string, descriptor: PropertyDescriptor) {

//     const original = descriptor.value;

//     descriptor.value = function (...args: any[]) {

//         return setTimeout(() => {
//             original.apply(this, args)
//         }, 2000);
//     }

//     return descriptor;
// }

// // export function addZoneDecorator<T extends abstract new (...args: any[]) => {}>(constructor: T) {
// //   abstract class AddZone extends constructor {
// //     protected forbiddenZones: string[];

// //     constructor(...args: any[]) {
// //       super(...args);
// //       // After super, this.forbiddenZones is initialized by parent class
// //       const parentZones = (this.forbiddenZones ?? []);
// //       this.forbiddenZones = [...parentZones, 'urban'];
// //     }
// //   }

// //   return AddZone;
// // }


