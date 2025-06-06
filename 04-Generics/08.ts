// Your task is to implement a generic mapped type AllFunctions that extracts a subtype with only the function properties from a provided type. The type should have 1 generic parameter:

// · T – the type to get the function properties from

// Hint: You may need to compose and use multiple generic mapped types

type FunctionKeys<T> = {

    [K in keyof T]: T[K] extends Function ? K : never;

}[keyof T];

type AllFunctions<T> = Pick<T, FunctionKeys<T>>;


type Employeee = {

    name: string,

    salary: number,

    work: () => void,

    takeBreak: () => string

};

type test = {
    
    name: string,
    
    age: number,
    
    test:() => string;
    
}

type extracted22 = AllFunctions<Employeee>;
type extracted = AllFunctions<test>