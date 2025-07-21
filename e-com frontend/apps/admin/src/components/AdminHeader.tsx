"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function AdminHeader() {
     const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };
  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <div className="text-xl font-bold text-gray-800">Dashboard</div>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Hello, Admin</span>
        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm" onClick={handleLogout}>

          Logout
        </button>
      </div>
    </header>
  );
}
