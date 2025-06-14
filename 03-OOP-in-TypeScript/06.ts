// Create a class Employee with:

// · public property name

// · protected property position

// · private property salary

// Implement methods:

// · getDetails – to return information about name and position (see format output)

// · showSalary – to return information about salary (see format in output)

class Employee {
    public name: string
    protected position: string
    private salary: number

    constructor(name: string, position: string, salary: number){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getDetails():string {return `Name: ${this.name}, Position: ${this.position}`}

    showSalary(): string { return `Salary: $${this.salary}`}
}

const emp = new Employee("Alice", "Manager", 5000);

console.log(emp.getDetails());

console.log(emp.showSalary());

console.log(emp.name)

