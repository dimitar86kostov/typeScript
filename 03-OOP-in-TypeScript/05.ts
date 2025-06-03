// Create a base class Message with method send(): string that returns "Sending message..." 
// Create two subclasses EmailMessage and SMSMessage. 
// Override the method in each subclass to return:

// · "Sending email..."

// · "Sending SMS..." respectively.

class Message {
    public send(): string { return 'Sending message...' }
}

class EmailMessage extends Message {
    override send(): string { return 'Sending email...' }
}

class SMSMessage extends Message {
    override send(): string { return "Sending SMS..." }

}

const messages: Message[] = [new Message(),

new EmailMessage(), new SMSMessage()];


messages.forEach((msg) => {

console.log(msg.send());

});