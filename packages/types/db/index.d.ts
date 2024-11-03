// Database Type Export
import * as db from '@repo/db'

export type UserEntity = typeof db.users.$inferSelect
type DB = typeof db

type EntityMap = {
    [K in keyof DB as `${K}Entity`]: DB[K]['$inferSelect'];
};

export type Entitys = {
    [K in keyof DB as `${K}Entity`]: DB[K]['$inferSelect'];
}