import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function PaymentSuccess() {
  const location = useLocation();
  const [orderId, setOrderId] = useState('');
  const [referenceId, setReferenceId] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const order_id = query.get('order_id');
    const reference_id = query.get('reference_id');

    setOrderId(order_id);
    setReferenceId(reference_id);
  }, [location.search]);

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful 🎉</h1>
      <p className="text-lg">Thank you for your order!</p>
      <div className="mt-4 text-left bg-gray-100 p-4 rounded shadow">
        {orderId && <p><strong>Order ID:</strong> {orderId}</p>}
        {referenceId && <p><strong>Reference ID:</strong> {referenceId}</p>}
      </div>
    </div>
  );
}
