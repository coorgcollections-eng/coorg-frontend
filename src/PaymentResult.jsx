import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function PaymentResult() {
  const location = useLocation();
  const [status, setStatus] = useState('');
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const cashfree_order_id = query.get('cashfree_order_id');

    if (cashfree_order_id) {
      axios.get(`https://leenight.ap-1.evennode.com/api/order/status/${cashfree_order_id}`)
        .then(res => {
          setStatus(res.data.payment_status);
          setOrder(res.data);
        })
        .catch(err => {
          setStatus('Error');
          console.error(err);
        });
    }
  }, [location.search]);

  if (!status) return <p className="p-6 text-center">Checking payment status...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      {status === 'Success' ? (
        <>
          <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful 🎉</h1>
          <p>Thank you for your order!</p>
        </>
      ) : status === 'Failed' ? (
        <>
          <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Failed ❌</h1>
          <p>Unfortunately, your payment could not be processed.</p>
        </>
      ) : (
        <h1 className="text-3xl font-bold text-yellow-600 mb-4">Payment Pending ⏳</h1>
      )}
      {order && (
        <div className="mt-4 text-left bg-gray-100 p-4 rounded shadow">
          <p><strong>Order ID:</strong> {order.cashfree_order_id}</p>
          <p><strong>Amount:</strong> ₹{order.total_with_gst_amount}</p>
        </div>
      )}
    </div>
  );
}
