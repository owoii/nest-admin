import { pgTable, varchar, smallint } from "drizzle-orm/pg-core";

import { commonEntity } from './common.schema'
export const users = pgTable('sys_user', {
    ...commonEntity(),
    username: varchar('usernmae', { length: 255 })
        .unique(),
    password: varchar('password', { length: 255 })
        .notNull(),
    psalt: varchar('psalt', { length: 32 }),
    nickname: varchar('nickname', { length: 255 }),
    avatar: varchar('avatar', { length: 255 }),
    qq: varchar('qq', { length: 255 }),
    email: varchar('email', { length: 255 }),
    phone: varchar('phone', { length: 255 }),
    remark: varchar('remark', { length: 255 }),
    status: smallint('status')
        .default(1),
});
