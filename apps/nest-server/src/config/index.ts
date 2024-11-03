import { type ISwaggerConfig, SwaggerConfig, swaggerRegToken } from './swagger.config'

export interface AllConfigType {
    [swaggerRegToken]: ISwaggerConfig
}

export type ConfigKeyPaths = RecordNamePaths<AllConfigType>

export default {
    SwaggerConfig
}