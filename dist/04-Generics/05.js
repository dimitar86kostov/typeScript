"use strict";
// Your task is to create a class that implements the CachingLogger interface.
// · The class should take in a LoggingFormat value in its constructor – the format for the log messages
// · Using the log method should use the passed in LoggingLevel parameter and the internal logging format to format the message and print it on the console
// o The date in the format uses toISOString()
// · A copy of each formatted message should also be saved in the cachedLogs Map under the correct LoggingLevel.
var LoggingLevel;
(function (LoggingLevel) {
    LoggingLevel["Info"] = "Info";
    LoggingLevel["Error"] = "Error";
    LoggingLevel["Warning"] = "Warning";
    LoggingLevel["Debug"] = "Debug";
})(LoggingLevel || (LoggingLevel = {}));
var LoggingFormat;
(function (LoggingFormat) {
    LoggingFormat["Standard"] = "[%level][%date] %text";
    LoggingFormat["Minimal"] = "*%level* %text";
})(LoggingFormat || (LoggingFormat = {}));
class Logger {
    cachedLogs = new Map();
    format;
    constructor(format) {
        this.format = format;
    }
    log(logLevel, message) {
        let date = new Date().toISOString();
        const filledMessage = this.format.replace('%level', logLevel).replace('%date', date).replace('%text', message);
        console.log(filledMessage);
        const currentMessage = this.cachedLogs.get(logLevel);
        if (currentMessage) {
            currentMessage.push(filledMessage);
            this.cachedLogs.set(logLevel, currentMessage);
        }
        else {
            this.cachedLogs.set(logLevel, [filledMessage]);
        }
    }
    getFormat() {
        return this.format;
    }
}
let logger = new Logger(LoggingFormat.Minimal);
logger.log(LoggingLevel.Info, "Just a simple message.");
logger.log(LoggingLevel.Error, "A Problem happened.");
console.log('-----------');
console.log(logger.getFormat());
console.log([...logger.cachedLogs.entries()].map(x => x[1].join('\n')).join('\n'));
// [Info][2024-01-01T22:00:00.000Z] This is an info message.
// [Info][2024-01-01T22:00:00.000Z] Another message.
// [Error][2024-01-01T22:00:00.000Z] Something went wrong.
// [Warning][2024-01-01T22:00:00.000Z] Be careful with the type assertions.
// [Debug][2024-01-01T22:00:00.000Z] Running the debugger.
// -----------
// [Info][2024-01-01T22:00:00.000Z] This is an info message.
// [Info][2024-01-01T22:00:00.000Z] Another message.
// [Error][2024-01-01T22:00:00.000Z] Something went wrong.
//# sourceMappingURL=05.js.map