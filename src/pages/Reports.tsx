
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
const MOCK_REPORTS = [
  {
    id: 1,
    title: "May Sales",
    data: "Total Sales: $1000",
    createdAt: "2025-05-01",
  },
  {
    id: 2,
    title: "Inventory",
    data: "Espresso: 30, Latte: 20, Mocha: 10",
    createdAt: "2025-04-28",
  },
];
const Reports = () => {
  const [reports] = useState(MOCK_REPORTS);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Reports & Analytics</h1>
      <Table>
        <TableCaption>Generated Reports</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Data</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports.map((report) => (
            <TableRow key={report.id}>
              <TableCell>{report.id}</TableCell>
              <TableCell>{report.title}</TableCell>
              <TableCell>{report.data}</TableCell>
              <TableCell>{report.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default Reports;
