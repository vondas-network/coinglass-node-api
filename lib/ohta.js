/**
 * LOGGING
 */
const { createLogger, format, transports } = require('winston');
const { combine, splat, timestamp, printf } = format;

const logFormat = printf(({ level, message, timestamp }) => {
    let msg = `${timestamp} [${level}] : ${message} `
    return msg
});


const fukuisan = createLogger({
    level: 'debug',
    format: combine(
        format.colorize(),
        splat(),
        // timestamp(),
        timestamp({ format: 'YYYY-MM-DDTHH:mm:ss.SSS' }),
        logFormat
    ),
    transports: [
        new transports.Console({
            level: 'debug'
        }),
        new transports.File({
            filename: 'coinglass/full.log',
            level: 'info'
        }),
    ]
});

const fukuisanErr = createLogger({
    level: 'error',
    format: combine(
        format.colorize(),
        splat(),
        // timestamp(),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSSZZ' }),
        logFormat
    ),
    transports: [
        new transports.Console({
            level: 'error'
        }),
        new transports.File({
            filename: 'coinglass/full-error.log',
            level: 'error'
        }),
    ]
});

module.exports = { fukuisan, fukuisanErr }