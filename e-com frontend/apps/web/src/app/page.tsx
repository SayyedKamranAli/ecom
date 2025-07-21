"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { useState } from "react";

const allProducts = [
  {
    id: 1,
    title: 'iPhone 14 Pro Max',
    price: 129999,
    image: '/images/iphone.jpg',
  },
  {
    id: 2,
    title: 'Samsung TV',
    price: 59999,
    image: '/images/tv.jpg',
  },
  {
    id: 3,
    title: 'Nike Shoes',
    price: 4999,
    image: '/images/shoes.jpg',
  },
];

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
  
    const filteredProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearch={setSearchTerm}/>

      <main className="flex-1">
        <Hero />
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
          {filteredProducts.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
