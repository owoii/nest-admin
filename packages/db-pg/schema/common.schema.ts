import { uuid, timestamp } from 'drizzle-orm/pg-core'
import { sql } from "drizzle-orm";
export const commonEntity = () => ({
    id: uuid('id')
        .primaryKey()
        .notNull()
        .defaultRandom()
        .unique(),
    createdAt: timestamp('created_at')
        .notNull()
        .defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .default(sql`now()`)
        .$onUpdate(() => sql`now()`)
})