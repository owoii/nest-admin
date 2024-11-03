// import cluster from 'node:cluster';
import chalk from 'chalk'
import { EnvTransformError } from '~/shared/error/transform.error'
import type { EnvKey } from '#/env'

// This variable is used to determine if the current environment is development, helping to clean up dead code.
export const isDev = process.env.NODE_ENV === 'development'

export const cwd = process.cwd()

/**
 * Env Variable Load, Env Variable default Type is `string`
 * @param key Env Variable Key
 * @param defaultValue if Env Variable value is undefault return this defaultvalue
 * @param transform  transform function,val are typed as string
 */
export function formatValue<R extends Common.BaseType = string>(
  key: EnvKey,
  defaultValue: R,
  transform?: (val: string) => R,
): R {
  let value: string | undefined = process.env[key];

  if (typeof value === 'undefined' || value === '') {
    return defaultValue;
  }
  try {
    if (!transform && typeof defaultValue !== 'string') {
      throw new Error(
        `${chalk.yellow('defaultValue')} type (${chalk.blue(typeof defaultValue)}) not is ${chalk.blue('string')} and ${chalk.yellow('transform')} not provider.`,
      )
    }
    return transform ? transform(value) : defaultValue
  } catch (e) {
    throw new EnvTransformError(key, e as Error);
  }
}

export function env(key: EnvKey, defaultValue: string = '') {
  return formatValue(key, defaultValue)
}

export function envString(key: EnvKey, defaultValue: string = '') {
  return formatValue(key, defaultValue)
}

export function envNumber(key: EnvKey, defaultValue: number = 0) {
  return formatValue(key, defaultValue, (value) => {
    const temp = Number(value);
    if (isNaN(temp)) {
      throw new Error(`${key} environment variable is not a valid number.`);
    }
    return temp;
  });
}

export function envBoolean(key: EnvKey, defaultValue: boolean = false) {
  return formatValue(key, defaultValue, (value) => {
    try {
      return Boolean(JSON.parse(value))
    } catch (e) {
      throw new Error(`${key} environment variable is not a boolean ,${e}`)
    }
  })
}