
/**
 * Drizzle ORM schemas for POS modules
 * Copy these into your Drizzle schema definition.
 * If using Postgres, import from 'drizzle-orm/pg-core'.
 */

// import { pgTable, serial, varchar, real, integer, timestamp, date, text } from "drizzle-orm/pg-core";

export const products = {
  id: "serial primary key",
  name: "varchar(60) not null",
  description: "varchar(255)",
  price: "real not null",
  inStock: "integer not null default 0",
  createdAt: "timestamp default now()",
};

export const orders = {
  id: "serial primary key",
  customerId: "integer references customers(id)",
  orderDate: "timestamp default now()",
  status: "varchar(30) not null",
  totalAmount: "real not null",
};

export const customers = {
  id: "serial primary key",
  name: "varchar(120) not null",
  email: "varchar(160) unique",
  phone: "varchar(24)",
  createdAt: "timestamp default now()",
};

export const payments = {
  id: "serial primary key",
  orderId: "integer references orders(id)",
  paymentDate: "timestamp default now()",
  amount: "real not null",
  method: "varchar(30) not null",
  status: "varchar(24) not null", // e.g. "completed", "pending"
};

export const reports = {
  id: "serial primary key",
  title: "varchar(128) not null",
  data: "text", // Could be JSON or summary
  createdAt: "timestamp default now()",
};

export const users = {
  id: "serial primary key",
  email: "varchar(160) unique not null",
  name: "varchar(80)",
  role: "varchar(24) not null default 'staff'",
  createdAt: "timestamp default now()",
};

export const settings = {
  id: "serial primary key",
  key: "varchar(60) unique not null",
  value: "varchar(1024)", // or json
  updatedAt: "timestamp default now()",
};
