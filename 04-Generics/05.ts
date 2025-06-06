// Your task is to create a class that implements the CachingLogger interface.

// · The class should take in a LoggingFormat value in its constructor – the format for the log messages

// · Using the log method should use the passed in LoggingLevel parameter and the internal logging format to format the message and print it on the console

// o The date in the format uses toISOString()

// · A copy of each formatted message should also be saved in the cachedLogs Map under the correct LoggingLevel.

enum LoggingLevel {

    Info = "Info",

    Error = "Error",

    Warning = "Warning",

    Debug = "Debug",

}

enum LoggingFormat {

    Standard = "[%level][%date] %text",

    Minimal = "*%level* %text"
}

interface CachingLogger<T extends LoggingLevel, V extends LoggingFormat> {

    cachedLogs: Map<T, string[]>

    log(logLevel: T, message: string): void;

    getFormat(): V

}

class Logger<T extends LoggingLevel, V extends LoggingFormat> implements CachingLogger<T, V> {

    cachedLogs: Map<T, string[]> = new Map();

    private format: V;

    constructor(format: V) {
        this.format = format;
    }


    log(logLevel: T, message: string): void {

        let date = new Date().toISOString();

        const filledMessage = this.format.replace('%level', logLevel).replace('%date', date).replace('%text', message);
        console.log(filledMessage);

        const currentMessage = this.cachedLogs.get(logLevel);

        if (currentMessage) {
            currentMessage.push(filledMessage);
            this.cachedLogs.set(logLevel, currentMessage);
        } else {
            this.cachedLogs.set(logLevel, [filledMessage]);
        }
    }

    getFormat(): V {
        return this.format;
    }
}

let logger = new Logger<LoggingLevel, LoggingFormat>(LoggingFormat.Minimal);

logger.log(LoggingLevel.Info, "Just a simple message.");

logger.log(LoggingLevel.Error, "A Problem happened.");

console.log('-----------')

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