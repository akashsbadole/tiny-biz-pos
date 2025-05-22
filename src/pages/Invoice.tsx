
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MOCK_INVOICE = {
  id: "INV-1001",
  customer: "John Doe",
  date: "2025-05-22",
  items: [
    { name: "Espresso", quantity: 2, unitPrice: 2.5 },
    { name: "Latte", quantity: 1, unitPrice: 3.0 },
  ],
};

function total(items: { quantity: number; unitPrice: number }[]) {
  return items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
}

const Invoice = () => {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold flex-1">Invoice Generator</h1>
        <Link to="/products">
          <Button variant="outline">Back to Products</Button>
        </Link>
        <Button onClick={handlePrint} variant="default">
          Print Invoice
        </Button>
      </div>
      <div ref={printRef} className="bg-white p-6 border rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="font-bold text-lg">Invoice #{MOCK_INVOICE.id}</h2>
            <p>
              <span className="font-medium">Customer:</span> {MOCK_INVOICE.customer}
            </p>
            <p>
              <span className="font-medium">Date:</span> {MOCK_INVOICE.date}
            </p>
          </div>
        </div>
        <table className="w-full mb-4">
          <thead>
            <tr>
              <th className="text-left p-2 border-b">Item</th>
              <th className="text-right p-2 border-b">Qty</th>
              <th className="text-right p-2 border-b">Unit Price</th>
              <th className="text-right p-2 border-b">Total</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_INVOICE.items.map((item, idx) => (
              <tr key={idx}>
                <td className="p-2">{item.name}</td>
                <td className="p-2 text-right">{item.quantity}</td>
                <td className="p-2 text-right">${item.unitPrice.toFixed(2)}</td>
                <td className="p-2 text-right">
                  ${(item.quantity * item.unitPrice).toFixed(2)}
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={3} className="p-2 text-right font-bold">
                Grand Total
              </td>
              <td className="p-2 text-right font-bold">
                ${total(MOCK_INVOICE.items).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-sm text-muted-foreground">
          Thank you for your purchase!
        </div>
      </div>
    </div>
  );
};

export default Invoice;
