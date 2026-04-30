import React, { useEffect, useState } from "react";
import API from "../api";
import { Link } from "react-router-dom";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await API.get("/order/my-orders");
        setOrders(res.data.data);
      } catch (err) {
        console.log(err);
        alert("Failed to fetch orders");
      }
    };

    fetchOrders();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2>My Orders</h2>

      <Link to="/checkout">Back to Checkout</Link>

      <div style={{ marginTop: "20px" }}>
        {orders.length === 0 ? (
          <p>No Orders Found</p>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              style={{
                border: "1px solid gray",
                padding: "15px",
                marginBottom: "15px",
              }}
            >
              <p><b>Order ID:</b> {order._id}</p>
              <p><b>Order Status:</b> {order.orderStatus}</p>
              <p><b>Payment Status:</b> {order.paymentStatus}</p>
              <p><b>Total:</b> ₹{order.totalPrice}</p>
              <p><b>Date:</b> {new Date(order.createdAt).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
