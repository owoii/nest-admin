import { registerAs } from '@nestjs/config';

import { envBoolean, env, envNumber } from '../global/env'

export const appRegToken = 'app'
const globalPrefix = env('GLOBAL_PREFIX', 'api')

export const AppConfig = registerAs(appRegToken, () => ({
    name: env('APP_NAME'),
    port: envNumber('APP_PORT', 3000),
    baseUrl: env('APP_BASE_URL'),
    globalPrefix,
    locale: env('APP_LOCALE', 'zh-CN'),
    /** 是否允许多端登录 */
    multiDeviceLogin: envBoolean('MULTI_DEVICE_LOGIN', true),

    logger: {
        level: env('LOGGER_LEVEL'),
        maxFiles: envNumber('LOGGER_MAX_FILES'),
    },
}))