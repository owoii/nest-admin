import { Module } from '@nestjs/common';
import { SystemModule } from './modules/system/system.module';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config'

import config from '~/config'

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env.local', `.env.${process.env.NODE_ENV}`],
    load: Object.values(config)
  }), SystemModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
