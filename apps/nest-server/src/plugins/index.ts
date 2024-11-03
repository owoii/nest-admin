import { type INestApplication } from '@nestjs/common';
import { setupSwagger } from './swagger/setup'
export function pluginSetup(app: INestApplication) {
    setupSwagger(app)
}