
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
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Espresso",
    description: "Strong coffee shot",
    price: 2.5,
    inStock: 30,
  },
  {
    id: 2,
    name: "Latte",
    description: "Espresso with steamed milk",
    price: 3.0,
    inStock: 20,
  },
  {
    id: 3,
    name: "Mocha",
    description: "Chocolate espresso drink",
    price: 3.5,
    inStock: 10,
  },
];

const Products = () => {
  const [products] = useState(MOCK_PRODUCTS);

  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold flex-1">Product Management</h1>
        <Link to="/invoice">
          <Button variant="outline">Go to Invoice Generator</Button>
        </Link>
      </div>
      <Table>
        <TableCaption>List of products</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.inStock}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default Products;
