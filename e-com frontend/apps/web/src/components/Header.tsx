// src/components/Header.tsx
"use client";

import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { FaSearch } from "react-icons/fa";
import { useDebounce } from "ui";

type HeaderProps = {
  onSearch: (term: string) => void;
};

export default function Header({ onSearch }: HeaderProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);
  useEffect(() => {
    onSearch(debouncedSearch); // ✅ trigger search only after debounce delay
  }, [debouncedSearch, onSearch]);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">MyKart</div>

        {/* Search Bar */}
        <div className="w-full md:w-1/2 mt-3 md:mt-0">
          <div className="relative w-full max-w-sm">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              placeholder="Search for products..."
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Auth & Cart */}
        <div className="flex gap-4 mt-3 md:mt-0">
          <a
            href="http://localhost:3000/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50"
          >
            Login
          </a>
          <button className="text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Cart
          </button>
        </div>
      </div>
    </header>
  );
}
