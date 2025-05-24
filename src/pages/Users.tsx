
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
const MOCK_USERS = [
  {
    id: 1,
    email: "manager@pos-demo.com",
    name: "Store Manager",
    role: "admin",
    createdAt: "2025-04-21",
  },
  {
    id: 2,
    email: "barista@pos-demo.com",
    name: "Jane Barista",
    role: "staff",
    createdAt: "2025-05-01",
  },
];
const Users = () => {
  const [users] = useState(MOCK_USERS);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <Table>
        <TableCaption>Staff & User List</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default Users;
