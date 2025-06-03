"use strict";
// Create a base class Message with method send(): string that returns "Sending message..." 
// Create two subclasses EmailMessage and SMSMessage. 
// Override the method in each subclass to return:
// · "Sending email..."
// · "Sending SMS..." respectively.
class Message {
    send() { return 'Sending message...'; }
}
class EmailMessage extends Message {
    send() { return 'Sending email...'; }
}
class SMSMessage extends Message {
    send() { return "Sending SMS..."; }
}
const messages = [new Message(),
    new EmailMessage(), new SMSMessage()];
messages.forEach((msg) => {
    console.log(msg.send());
});
//# sourceMappingURL=05.js.map