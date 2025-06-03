"use strict";
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
class Course {
    title;
    duration;
    constructor(title, duration) {
        this.title = title;
        this.duration = duration;
    }
}
class ProgrammingCourse extends Course {
    language;
    constructor(title, duration, language) {
        super(title, duration);
        this.language = language;
    }
    getDescription() {
        return `Programming Course: ${this.title} in ${this.language} - ${this.duration} hours`;
    }
}
class DesignCourse extends Course {
    tools;
    constructor(title, duration, tools) {
        super(title, duration);
        this.tools = tools;
    }
    getDescription() {
        return `${this.title} using ${this.tools.join(', ')} - ${this.duration} hours`;
    }
}
const jsCourse = new ProgrammingCourse("Intro to JavaScript", 40, "JavaScript");
const uiCourse = new DesignCourse("UX Fundamentals", 30, ["Figma", "Sketch"]);
console.log(jsCourse.getDescription());
console.log(uiCourse.getDescription());
//# sourceMappingURL=11.js.map