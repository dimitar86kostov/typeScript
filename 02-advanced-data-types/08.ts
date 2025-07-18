interface Uuser {
    username: string, signupDate: Date
}
type StatusTask = 'Logged' | 'Started' | 'InProgress' | 'Done';


interface Task {
    status: StatusTask,
    title: string,
    daysRequired: number,
    assignedTo: {
        username: string,
        signupDate: Date
    } | undefined,
    changeStatus(newStatus: StatusTask): void
}

function assignTask(user: Uuser, task: Task) {

    if (task.assignedTo == undefined) {

        task.assignedTo = user;

        console.log(`User ${user.username} assigned to task '${task.title}'`);

    }

}

let user = {

username: 'Margaret',

signupDate: new Date(2022, 1, 13),

passwordHash: 'random'

}

let task1 = {

status: <'Logged' | 'Started' | 'InProgress' | 'Done'>'Logged',

title: 'Need assistance',

daysRequired: 1,

assignedTo: undefined,

changeStatus(newStatus: StatusTask) {

this.status = newStatus; }

}

let task2 = {

status: <'Logged' | 'Started' | 'InProgress' | 'Done'>'Done',

title: 'Test',

daysRequired: 12,

assignedTo: undefined, 
changeStatus(newStatus: StatusTask) { this.status = newStatus; }, 
moreProps: 300, 
evenMore: 'wow' } 

// assignTask(user, task1); 
// assignTask(user, task2);