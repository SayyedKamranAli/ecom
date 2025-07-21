export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Admin Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white shadow p-4 rounded">Users</div>
        <div className="bg-white shadow p-4 rounded">Orders</div>
        <div className="bg-white shadow p-4 rounded">Products</div>
        <div className="bg-white shadow p-4 rounded">Revenue</div>
      </div>
    </div>
  );
}
