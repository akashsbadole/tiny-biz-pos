
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
const MOCK_SETTINGS = [
  { id: 1, key: "business_name", value: "POS Demo Shop", updatedAt: "2025-05-01" },
  { id: 2, key: "currency", value: "USD", updatedAt: "2025-05-01" },
];
const Settings = () => {
  const [settings] = useState(MOCK_SETTINGS);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Settings & Configuration</h1>
      <Table>
        <TableCaption>Settings List</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Key</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Updated</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {settings.map((setting) => (
            <TableRow key={setting.id}>
              <TableCell>{setting.id}</TableCell>
              <TableCell>{setting.key}</TableCell>
              <TableCell>{setting.value}</TableCell>
              <TableCell>{setting.updatedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default Settings;
