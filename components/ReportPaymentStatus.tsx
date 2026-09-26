'use client';

import { useEffect, useState } from 'react';

export default function ReportPaymentStatus() {
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setCancelled(params.get('payment') === 'cancelled');
  }, []);

  if (!cancelled) return null;

  return (
    <div className="payment-cancelled-banner">
      <div>
        <strong>Payment was cancelled.</strong>
        <span>Your report draft is still available in this browser. You can continue editing, print the free version, or try the professional PDF checkout again.</span>
      </div>
      <button
        type="button"
        onClick={() => {
          const url = new URL(window.location.href);
          url.searchParams.delete('payment');
          window.history.replaceState({}, '', url.pathname + url.search);
          setCancelled(false);
        }}
      >
        Dismiss
      </button>
    </div>
  );
}
