import "../styles/globals.css";

export const metadata = {
  title: 'My E-commerce App',
  description: 'A modern e-commerce application built with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}
