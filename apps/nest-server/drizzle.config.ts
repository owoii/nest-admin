import { defineConfig } from 'drizzle-kit';
// import schema from '@repo/db/schema'
// import * as k from 'src/shared/database/schema.ts'
// @db/pg
export default defineConfig({
    out: './drizzle',
    schema: './src/shared/database/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        user: 'cola',
        database: 'nest-admin-dev',
        port: 5432,
        host: 'localhost',
        ssl: false
    },
});