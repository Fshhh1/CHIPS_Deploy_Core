
export default function AdminDashboard() {
  return (
    <main>
      <h1>Admin Dashboard</h1>
      <p>Federation Echo Status: All Nodes Online (Simulated)</p>
      <p>Invite Tokens Issued: 5</p>
      <p>Rogue Detection: None Detected.</p>
      <ul>
        <li><a href="/chipx_manager">.chipx Manager</a></li>
        <li><a href="/marketplace">Marketplace</a></li>
        <li><a href="/developers">Developer Portal</a></li>
      </ul>
    </main>
  );
}
