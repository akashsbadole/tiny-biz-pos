
// Drizzle ORM schemas for POS modules

import { serial, text, integer, real, date, primaryKey, pgTable, boolean } from "drizzle-orm/pg-core";

// Products table
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  price: real("price").notNull(),
  stock: integer("stock").notNull(),
  createdAt: date("created_at").defaultNow(),
  updatedAt: date("updated_at").defaultNow(),
});

// Customers table
export const customers = pgTable("customers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email"),
  phone: text("phone"),
  address: text("address"),
  createdAt: date("created_at").defaultNow(),
});

// Orders table
export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  customerId: integer("customer_id").notNull().references(() => customers.id),
  orderDate: date("order_date").defaultNow(),
  status: text("status").notNull(), // e.g. "Pending", "Completed"
  userId: integer("user_id").notNull().references(() => users.id),
  notes: text("notes"),
  createdAt: date("created_at").defaultNow(),
});

// Order items table
export const orderItems = pgTable("order_items", {
  id: serial("id").primaryKey(),
  orderId: integer("order_id").notNull().references(() => orders.id),
  productId: integer("product_id").notNull().references(() => products.id),
  quantity: integer("quantity").notNull(),
  unitPrice: real("unit_price").notNull(),
});

// Payments table
export const payments = pgTable("payments", {
  id: serial("id").primaryKey(),
  orderId: integer("order_id").notNull().references(() => orders.id),
  paymentDate: date("payment_date").defaultNow(),
  amount: real("amount").notNull(),
  method: text("method").notNull(), // e.g. "Cash"
  status: text("status").notNull(), // e.g. "Completed"
  upiRef: text("upi_ref"),
});

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  role: text("role").notNull(), // e.g. "admin", "staff"
  clerkId: text("clerk_id"), // for Clerk auth integration
  createdAt: date("created_at").defaultNow(),
});

// Settings table
export const settings = pgTable("settings", {
  id: serial("id").primaryKey(),
  key: text("key").notNull(),
  value: text("value").notNull(),
  updatedAt: date("updated_at").defaultNow(),
});

// Reports table
export const reports = pgTable("reports", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  data: text("data").notNull(),
  createdAt: date("created_at").defaultNow(),
});

// Invoices table
export const invoices = pgTable("invoices", {
  id: serial("id").primaryKey(),
  orderId: integer("order_id").notNull().references(() => orders.id),
  generatedByUserId: integer("generated_by_user_id").notNull().references(() => users.id),
  logoUrl: text("logo_url"),
  customNotes: text("custom_notes"),
  businessInfo: text("business_info"),
  createdAt: date("created_at").defaultNow(),
});

// Business (for branding on invoices)
export const businesses = pgTable("businesses", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  ownerUserId: integer("owner_user_id").notNull().references(() => users.id),
  logoUrl: text("logo_url"),
  address: text("address"),
  phone: text("phone"),
  upi: text("upi"),
  createdAt: date("created_at").defaultNow(),
  updatedAt: date("updated_at").defaultNow(),
});

