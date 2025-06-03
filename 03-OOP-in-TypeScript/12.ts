// Create a class Task with:

// · title: string

// · description: string

// · completed: boolean (default: false)

// · private property createdBy: string

// Use getters and setters:

// · Get createdBy only with a getter

// · Add method toggleStatus(): void to switch completed status

// · Add method getDetails(): string to return information about a task in the format 
// "Task: <title> - <description> - <Completed | Pending>"

// Also create a static method createSampleTasks(): 
// Task[] that returns an array with at least two example tasks.

class Task {
    title: string;
    description: string;
    completed = false;
    private _createdBy: string;

    constructor(title: string, description: string, createdBy: string) {
        this.title = title;
        this.description = description;
        this._createdBy = createdBy;
    }

    get createdBy() {
        return this._createdBy;
    }

    public toggleStatus(): void {
        this.completed = !this.completed;
    }

    getDetails(): string {
        return `Task: ${this.title} - ${this.description} - ${this.completed ? 'Completed' : 'Pending'}`
    }

    static createSampleTasks(): Task[] {
        return [
            new Task ('cmooon', 'do it', 'now'),
            new Task ('hey maaan', 'right now!', 'cleaning')
        ]
    };
}

const task11 = new Task("Complete homework", "Finish math exercises", "Charlie");
task11.toggleStatus();
console.log(task11.getDetails());

// const task2 = new Task("Clean room", "Clean the room", "Mary");
// console.log(task2.getDetails());

// const tasks = Task.createSampleTasks();
// tasks.forEach(task => console.log(task.getDetails()));