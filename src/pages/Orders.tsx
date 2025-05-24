
import { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
const MOCK_ORDERS = [
  {
    id: 1,
    customerId: 1,
    orderDate: "2025-05-23",
    status: "Completed",
    totalAmount: 10,
  },
  {
    id: 2,
    customerId: 2,
    orderDate: "2025-05-22",
    status: "Pending",
    totalAmount: 7.5,
  },
];

const Orders = () => {
  const [orders] = useState(MOCK_ORDERS);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Order Management</h1>
      <Table>
        <TableCaption>Orders history</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Customer ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.customerId}</TableCell>
              <TableCell>{order.orderDate}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default Orders;
