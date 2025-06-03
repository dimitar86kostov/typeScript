// Create a class Counter with:

// · static property count initialized to 0 – property should only be accessible from within the class

// · static method increment() that increases the count

// · static method getCount() that returns the current count

class Counter {
   private static count: number = 0;

   public static increment(): number {
        return Counter.count++
    }

   public static getCount(): number {
        return Counter.count
    }
}

Counter.increment();

Counter.increment();

console.log(Counter.getCount())