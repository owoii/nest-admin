import chalk from 'chalk'
import type { EnvKey } from '#/env'
/**
 * Data transform error
 */
export class EnvTransformError extends Error {
    constructor(key: EnvKey | string, originalError: Error) {
        super();
        this.name = 'EnvTransformError';
        this.message = [
            `Env Transform Error : Failed to Transform Value.`,
            `Env Key : [${chalk.blue(key)}]`,
            `Original Error : ${originalError}`,
        ].join('\n');
        this.stack = originalError.stack;
    }
}