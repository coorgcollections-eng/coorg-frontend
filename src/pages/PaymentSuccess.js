import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import API from "../api";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("Checking payment...");
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const orderId = searchParams.get("order_id");

        if (!orderId) {
          setStatus("Order ID missing!");
          return;
        }

        const res = await API.get(`/order/cashfree/verify/${orderId}`);
        const orderData = res.data.data;

        setOrder(orderData);

        if (orderData.paymentStatus === "paid") {
          setStatus("✅ Payment Successful!");
        } else if (orderData.paymentStatus === "failed") {
          setStatus("❌ Payment Failed!");
        } else if (orderData.paymentStatus === "user_dropped") {
          setStatus("⚠️ Payment Not Completed (User Dropped)");
        } else {
          setStatus("⚠️ Payment Pending!");
        }
      } catch (err) {
        console.log(err);
        setStatus("❌ Payment Verification Error!");
      }
    };

    verifyPayment();
  }, [searchParams]);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Payment Result</h2>
      <h3>{status}</h3>

      {order && (
        <div style={{ marginTop: "20px" }}>
          <p><b>Order ID:</b> {order._id}</p>
          <p><b>Payment Status:</b> {order.paymentStatus}</p>
          <p><b>Order Status:</b> {order.orderStatus}</p>
          <p><b>Total:</b> ₹{order.totalPrice}</p>
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <Link to="/my-orders">Go to My Orders</Link>
      </div>
    </div>
  );
}