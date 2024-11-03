import { varchar, timestamp } from 'drizzle-orm/mysql-core'
import { sql } from 'drizzle-orm'
import { createId } from '@paralleldrive/cuid2';

export const commonEntity = {
    id: varchar('id', { length: 128 })
        .primaryKey()
        .notNull()
        .$defaultFn(() => createId()),
    createdAt: timestamp('created_at')
        .notNull()
        .defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .default(sql`NOW()`)
        .$onUpdate(() => sql`NOW()`)
}