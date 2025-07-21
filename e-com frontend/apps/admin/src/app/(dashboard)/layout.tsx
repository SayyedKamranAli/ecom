import Sidebar from "../../components/Sidebar";
import AdminHeader from "../../components/AdminHeader";
import "../../styles/globals.css";

export const metadata = {
  title: "Admin Panel",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <AdminHeader />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
