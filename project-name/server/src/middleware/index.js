import { logger, errorHandler } from './index.js';

export const middleware = [
    logger,
    errorHandler,
];