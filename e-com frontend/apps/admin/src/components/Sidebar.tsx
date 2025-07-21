import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-700 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="space-y-4">
        <Link href="/dashboard" className="block hover:underline">Dashboard</Link>
        <Link href="/products" className="block hover:underline">Products</Link>
        <Link href="/orders" className="block hover:underline">Orders</Link>
        <Link href="/users" className="block hover:underline">Users</Link>
      </nav>
    </div>
  );
}
