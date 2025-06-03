// Create an abstract class Course with:

// · title: string (public)

// · duration: number in hours (public)

// · abstract method getDescription(): string

// Create two subclasses:

// · ProgrammingCourse with additional property - language: string

// · DesignCourse with additional property - tools: string[]

// Each subclass should override getDescription() 
// to return a string like: "Programming Course: <title> in <language> - <duration> hours" 
// "Design Course: <title> using <tools> - <duration> hours

abstract class Course {

    public title: string;
    public duration: number;

    constructor(title: string, duration: number) {
        this.title = title;
        this.duration = duration;
    }

    public abstract getDescription(): string;
}

class ProgrammingCourse extends Course {

    public language: string;

    constructor(title: string, duration: number, language: string) {
        super(title, duration)
        this.language = language;
    }

    override getDescription(): string {
        return `Programming Course: ${this.title} in ${this.language} - ${this.duration} hours`
    }
}

class DesignCourse extends Course {

    public tools: string[];

    constructor(title: string, duration: number, tools: string[]) {
        super(title, duration)
        this.tools = tools;
    }

    override getDescription(): string {
        return `${this.title} using ${this.tools.join(', ')} - ${this.duration} hours`
    }
}

const jsCourse = new ProgrammingCourse("Intro to JavaScript", 40, "JavaScript");

const uiCourse = new DesignCourse("UX Fundamentals", 30, ["Figma", "Sketch"]);


console.log(jsCourse.getDescription());

console.log(uiCourse.getDescription());