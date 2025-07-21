// apps/admin/src/app/page.tsx
import { redirect } from 'next/navigation';

export default function Home() {
  // Check auth (mock condition)
  const isAuthenticated = false;

  if (isAuthenticated) {
    redirect('/dashboard');
  } else {
    redirect('/login');
  }
}
