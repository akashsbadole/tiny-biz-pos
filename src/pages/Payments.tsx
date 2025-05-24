
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
const MOCK_PAYMENTS = [
  {
    id: 1,
    orderId: 1,
    paymentDate: "2025-05-23",
    amount: 10,
    method: "Cash",
    status: "Completed",
  },
  {
    id: 2,
    orderId: 2,
    paymentDate: "2025-05-22",
    amount: 7.5,
    method: "Card",
    status: "Pending",
  },
];
const Payments = () => {
  const [payments] = useState(MOCK_PAYMENTS);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Payment Processing</h1>
      <Table>
        <TableCaption>Payments processed</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell>{payment.id}</TableCell>
              <TableCell>{payment.orderId}</TableCell>
              <TableCell>{payment.paymentDate}</TableCell>
              <TableCell>${payment.amount.toFixed(2)}</TableCell>
              <TableCell>{payment.method}</TableCell>
              <TableCell>{payment.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default Payments;
