
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function TokenGate() {
  const [token, setToken] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    if (token === 'GENESIS-CHIPS-TOKEN-001-REDMELON') {
      router.push('/admin_dashboard');
    } else {
      alert('Invalid token.');
    }
  };

  return (
    <main>
      <h1>Token Gate</h1>
      <p>Enter your Genesis Token:</p>
      <input type="text" value={token} onChange={(e) => setToken(e.target.value)} />
      <button onClick={handleSubmit}>Verify</button>
    </main>
  );
}
