import { Global, DynamicModule, Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

const pool = new Pool({
    user:'',
    password:'',
    host:'',

})
@Global()
@Module({
    imports: [
    ]
})
export class DatabaseModule { }