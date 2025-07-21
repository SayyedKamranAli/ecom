// src/app/layout.tsx
import { AuthProvider } from "@/context/AuthContext";
import "../styles/globals.css";

export const metadata = {
  title: "Admin Panel",
  description: "Admin panel for managing the store",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

