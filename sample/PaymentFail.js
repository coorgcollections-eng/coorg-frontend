import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function PaymentFail() {
  const location = useLocation();
  const [orderId, setOrderId] = useState('');
  const [reason, setReason] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    setOrderId(query.get('order_id') || '');
    setReason(query.get('reason') || 'Payment was not successful.');
  }, [location.search]);

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Failed ❌</h1>
      <p className="text-lg">Unfortunately, your payment could not be processed.</p>
      <div className="mt-4 text-left bg-gray-100 p-4 rounded shadow">
        {orderId && <p><strong>Order ID:</strong> {orderId}</p>}
        {reason && <p><strong>Reason:</strong> {reason}</p>}
      </div>
      <button
        onClick={() => window.location.href = '/'}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
      >
        Try Again
      </button>
    </div>
  );
}
