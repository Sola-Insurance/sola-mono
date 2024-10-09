import {sql} from "drizzle-orm"

import {
    pgTableCreator,
    serial,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core"


/**
 * Create a table with the given name and columns
 */
export const createTable = pgTableCreator((name) => name)


export const users = createTable(
    "user",
    {
        id: serial("id").primaryKey(),
        name: varchar("name", {length: 256}),
        createdAt: timestamp("created_at", {withTimezone: true})
            .default(sql`CURRENT_TIMESTAMP`)
            .notNull(),
        updatedAt: timestamp("updated_at", {withTimezone: true}).$onUpdate(
            () => new Date()
        ),
    },
)
