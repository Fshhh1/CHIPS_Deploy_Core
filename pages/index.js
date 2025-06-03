
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>CHIPS Admin Dashboard</h1>
      <p>Welcome! Vercel deployment is working. Use the links below to navigate:</p>
      <ul>
        <li><Link href="/token_gate">Token Gate</Link></li>
        <li><Link href="/admin_dashboard">Admin Dashboard</Link></li>
        <li><Link href="/chipx_manager">.chipx Manager</Link></li>
        <li><Link href="/marketplace">Marketplace</Link></li>
        <li><Link href="/developers">Developer Portal</Link></li>
      </ul>
    </main>
  );
}
