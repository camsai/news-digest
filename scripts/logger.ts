const logLevels = ["trace", "debug", "info", "warn", "error", "critical"] as const;
type LogLevel = (typeof logLevels)[number];

export function createLogger(level: string = "error") {
    if (!logLevels.includes(level as LogLevel)) throw new Error(`Unknown log level: ${level}`);
    return (severity: LogLevel, message: string) => {
        if (logLevels.indexOf(severity) >= logLevels.indexOf(level as LogLevel)) {
            process.stderr.write(`[${severity}] ${message}\n`);
        }
    };
}
