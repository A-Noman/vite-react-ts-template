import { useEffect, useState } from 'react';

export default function TestComponent() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/`)
      .then((res) => res.json())
      .then((data) => setStatus(data))
      .catch((err) => {
        console.error('❌ Failed to fetch:', err);
        setStatus({ error: true });
      });
  }, []);

  return (
    <div>
      <h2>API Status</h2>
      {status ? JSON.stringify(status, null, 2) : 'Loading...'}
    </div>
  );
}
