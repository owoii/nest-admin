import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module';
import { pluginSetup } from './plugins';
import type { NestFastifyApplication } from '@nestjs/platform-fastify'
import { fastifyApp } from './common/adapters/fastify.adapter'
// import { ConfigService } from '@nestjs/config'
import { plainToClass } from 'class-transformer'
// import { type ConfigKeyPaths } from '~/config'

class N {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

const f = plainToClass(N, {
  name: 'hello'
})
console.log(f)

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyApp,
    {
      bufferLogs: true,
      snapshot: true
    }
  );

  pluginSetup(app)

  // app.get(ConfigService<ConfigKeyPaths>)

  await app.listen({
    port: 3000
  });
}

bootstrap();