
// Drizzle ORM schema for the products table
// You can use or adapt this in your Drizzle schema definition file

import { pgTable, serial, varchar, real, integer, timestamp } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 60 }).notNull(),
  description: varchar("description", { length: 255 }),
  price: real("price").notNull(),
  inStock: integer("in_stock").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

