import { timestamp, uuid, text, pgTable, pgEnum } from 'drizzle-orm/pg-core'
import { createdAt, id, updatedAt } from '../schema-helpers'

export const userRoles = ['user', 'admin'] as const
export type UserRole = (typeof userRoles)[number]
export const userRoleEnum = pgEnum('user_role', userRoles)

export const users = pgTable('users', {
  id,
  clerkUserId: uuid().notNull().unique(),
  email: text().notNull(),
  name: text().notNull(),
  role: userRoleEnum().notNull().default('user'),
  imageUrl: text(),
  deletedAt: timestamp({ withTimezone: true }),
  createdAt,
  updatedAt
})
