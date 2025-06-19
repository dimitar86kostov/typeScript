export function decorator1(constructor: Function) { }

export function decorator2(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    const originalGetter = descriptor.get!;

    descriptor.get = function () {

        const originalPrice = originalGetter.call(this);
        return originalPrice * 1.2;
    }

}

export function decorator3(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    const originalGetter = descriptor.get!;

    descriptor.get = function () {

        const originalPrice = originalGetter.call(this);
        return originalPrice * 1.2;
    }

}
export function decorator4(target: any, propertyKey: string | symbol, parameterIndex: number) { }

export function decorator5<T extends abstract new (...args: any[]) => {}>(constructor: T): T {

    abstract class ExtendedPartialMonthlyMotel extends constructor {

        public static readonly MotelName = 'Monthly Motel';

    }

    return ExtendedPartialMonthlyMotel;
}
