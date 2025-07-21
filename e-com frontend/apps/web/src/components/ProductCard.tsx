"use client";
import { Button, formatPrice } from "ui";
interface Product {
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded" />
      <h3 className="mt-2 font-semibold">{product.title}</h3>
      <p className="text-blue-600 font-bold">{formatPrice(product.price)}</p>
      <Button onClick={() => alert("Clicked")}>Buy Now</Button>
    </div>
  );
}
