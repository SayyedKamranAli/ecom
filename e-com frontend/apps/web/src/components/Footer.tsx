// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center py-4 text-sm text-gray-600 mt-10">
      © {new Date().getFullYear()} MyKart. All rights reserved.
    </footer>
  );
}
