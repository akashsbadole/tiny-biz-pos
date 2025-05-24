
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Mock business and user data
const MOCK_BUSINESS = {
  logo: "",
  name: "POS Demo Shop",
  address: "123 Main St, City",
  phone: "123-456-7890",
  upi: "posdemo@upi",
};

const MOCK_USER = {
  id: 2,
  name: "Jane Barista",
  email: "barista@pos-demo.com",
  role: "staff",
};

// Mock invoice data
const MOCK_INVOICE = {
  id: "INV-1001",
  customer: "John Doe",
  date: "2025-05-22",
  items: [
    { name: "Espresso", quantity: 2, unitPrice: 2.5 },
    { name: "Latte", quantity: 1, unitPrice: 3.0 },
  ],
  notes: "Thank you for your business!",
};

function total(items: { quantity: number; unitPrice: number }[]) {
  return items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
}

// Logo upload component
function LogoUpload({ logo, setLogo }: { logo: string; setLogo: (url: string) => void }) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) setLogo(ev.target.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">Business Logo</label>
      {
        logo ? (
          <img src={logo} alt="Business Logo" className="h-16 mb-2 rounded shadow border" />
        ) : (
          <div className="mb-2 text-muted-foreground">No logo uploaded</div>
        )
      }
      <input type="file" accept="image/*" onChange={onChange} />
    </div>
  );
}

const Invoice = () => {
  const printRef = useRef<HTMLDivElement>(null);
  // Local state for customizable business info/logo
  const [business, setBusiness] = useState(MOCK_BUSINESS);
  const [editableNotes, setEditableNotes] = useState(MOCK_INVOICE.notes);
  const [logo, setLogo] = useState(MOCK_BUSINESS.logo);

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
      {/* Customization panel (business info, logo, notes) */}
      <div className="bg-white rounded border p-4 mb-6">
        <LogoUpload logo={logo} setLogo={setLogo} />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Business Name</label>
            <input
              className="w-full border px-2 py-1 rounded"
              value={business.name}
              onChange={e => setBusiness({ ...business, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input
              className="w-full border px-2 py-1 rounded"
              value={business.phone}
              onChange={e => setBusiness({ ...business, phone: e.target.value })}
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-1 font-medium">Address</label>
            <input
              className="w-full border px-2 py-1 rounded"
              value={business.address}
              onChange={e => setBusiness({ ...business, address: e.target.value })}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">UPI ID</label>
            <input
              className="w-full border px-2 py-1 rounded"
              value={business.upi}
              onChange={e => setBusiness({ ...business, upi: e.target.value })}
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block mb-1 font-medium">Invoice Notes</label>
          <textarea
            className="w-full border px-2 py-1 rounded min-h-[48px]"
            value={editableNotes}
            onChange={e => setEditableNotes(e.target.value)}
          />
        </div>
      </div>
      {/* INVOICE PREVIEW */}
      <div ref={printRef} className="bg-white p-6 border rounded shadow print:!p-4 print:!border-0 print:!shadow-none">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            {logo && <img src={logo} alt="Logo" className="h-12 rounded border shadow" />}
            <div>
              <h2 className="font-bold text-lg">{business.name}</h2>
              <div className="text-sm">{business.address}</div>
              <div className="text-sm">{business.phone}</div>
              <div className="text-sm">UPI: {business.upi}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-bold">Invoice #{MOCK_INVOICE.id}</div>
            <div>
              <span className="font-medium">Date:</span> {MOCK_INVOICE.date}
            </div>
            <div>
              <span className="font-medium">Customer:</span> {MOCK_INVOICE.customer}
            </div>
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
        <div className="mb-2 text-sm">
          <span className="font-medium">Payment Option:</span> Cash only<br />
          <span className="text-muted-foreground">
            Please pay to UPI ID <span className="font-medium">{business.upi}</span> or with cash at the counter.
          </span>
        </div>
        <div className="mt-4">
          <div className="text-sm font-medium">Created by: {MOCK_USER.name} ({MOCK_USER.email})</div>
        </div>
        <div className="text-sm text-muted-foreground mt-3 whitespace-pre-wrap">
          {editableNotes}
        </div>
      </div>
    </div>
  );
};

export default Invoice;
