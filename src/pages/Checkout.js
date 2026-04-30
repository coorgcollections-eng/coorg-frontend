// import React, { useState } from "react";
// import API from "../api";
// import { Link } from "react-router-dom";

// export default function Checkout() {
//   const [loading, setLoading] = useState(false);

//   const handlePayNow = async () => {
//     try {
//       setLoading(true);

//       // 1️⃣ Create Order
//       const orderRes = await API.post("/order/create", {
//         shippingAddress: {
//           name: "Test User",
//           email: "test@gmail.com",
//           phone: "9999999999",
//           address: "Bangalore",
//           city: "Bangalore",
//           state: "Karnataka",
//           postalCode: "560001",
//           country: "India",
//         },
//         paymentMethod: "ONLINE",
//       });

//       const orderId = orderRes.data.data._id;
//       console.log("Order Created:", orderId);

//       // 2️⃣ Create Cashfree Session
//       const sessionRes = await API.post(`/order/cashfree/session/${orderId}`);
//       const paymentSessionId = sessionRes.data.data.paymentSessionId;

//       console.log("Payment Session:", paymentSessionId);

//       // 3️⃣ Open Cashfree Checkout
//       const cashfree = window.Cashfree({ mode: "sandbox" });

//       cashfree.checkout({
//         paymentSessionId,
//         redirectTarget: "_self",
//       });
//     } catch (err) {
//       console.log(err);
//       alert("Payment Failed to Start");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>Checkout</h2>

//       <button
//         onClick={handlePayNow}
//         disabled={loading}
//         style={{
//           padding: "10px 20px",
//           background: "green",
//           color: "white",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         {loading ? "Processing..." : "Pay Now"}
//       </button>

//       <div style={{ marginTop: "20px" }}>
//         <Link to="/my-orders">My Orders</Link>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import API from "../api";
import { Link } from "react-router-dom";

export default function Checkout() {
  const [loading, setLoading] = useState(false);

  const handlePayNow = async () => {
    try {
      setLoading(true);

      // 1️⃣ Create Order
      const orderRes = await API.post("/order/create", {
        shippingAddress: {
          name: "Test User",
          email: "test@gmail.com",
          phone: "9999999999",
          address: "Bangalore",
          city: "Bangalore",
          state: "Karnataka",
          postalCode: "560001",
          country: "India",
        },
        paymentMethod: "ONLINE",
      });

      const orderId = orderRes.data.data._id;
      console.log("Order Created:", orderId);

      // 2️⃣ Create Cashfree Session
      const sessionRes = await API.post(`/order/cashfree/session/${orderId}`);
      const paymentSessionId = sessionRes.data.data.paymentSessionId;

      console.log("Payment Session:", paymentSessionId);

      // 3️⃣ Load Cashfree SDK check
      if (!window.Cashfree) {
        alert("Cashfree SDK not loaded!");
        return;
      }

      // 4️⃣ Open Cashfree Checkout (Production Mode)
      const cashfree = window.Cashfree({
        mode: "sandbox"  // "production", // mode: "sandbox"   //import.meta.env.VITE_CASHFREE_MODE || "production",
      });

      cashfree.checkout({
        paymentSessionId,
        redirectTarget: "_self",
      });
    } catch (err) {
      console.log("Payment Error:", err);
      alert(err?.response?.data?.message || "Payment Failed to Start");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Checkout</h2>

      <button
        onClick={handlePayNow}
        disabled={loading}
        style={{
          padding: "10px 20px",
          background: loading ? "gray" : "green",
          color: "white",
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>

      <div style={{ marginTop: "20px" }}>
        <Link to="/my-orders">My Orders</Link>
      </div>
    </div>
  );
}



// import React, { useState } from "react";
// import API from "../api";
// import { Link } from "react-router-dom";

// export default function Checkout() {
//   const [loading, setLoading] = useState(false);

//   const handlePayNow = async () => {
//     try {
//       setLoading(true);

//       // 1️⃣ Create Order
//       const orderRes = await API.post("/order/create", {
//         shippingAddress: {
//           name: "Test User",
//           email: "test@gmail.com",
//           phone: "9999999999",
//           address: "Bangalore",
//           city: "Bangalore",
//           state: "Karnataka",
//           postalCode: "560001",
//           country: "India",
//         },
//         paymentMethod: "ONLINE",
//       });

//       const orderId = orderRes.data.data._id;
//       console.log("Order Created:", orderId);

//       // 2️⃣ Create Cashfree Session
//       const sessionRes = await API.post(`/order/cashfree/session/${orderId}`);
//       const paymentSessionId = sessionRes.data.data.paymentSessionId;

//       console.log("Payment Session:", paymentSessionId);

//       // 3️⃣ Cashfree SDK check
//       if (!window.Cashfree) {
//         alert("Cashfree SDK not loaded!");
//         return;
//       }

//       // 4️⃣ Open Cashfree Checkout (PRODUCTION MODE)
//       const cashfree = window.Cashfree({
//         mode: "production", // mode: "sandbox"
//       });

//       cashfree.checkout({
//         paymentSessionId,
//         redirectTarget: "_blank", //"_self",
//       });
//     } catch (err) {
//       console.log("Payment Error:", err);
//       alert(err?.response?.data?.message || "Payment Failed to Start");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>Checkout</h2>

//       <button
//         onClick={handlePayNow}
//         disabled={loading}
//         style={{
//           padding: "10px 20px",
//           background: loading ? "gray" : "green",
//           color: "white",
//           border: "none",
//           cursor: loading ? "not-allowed" : "pointer",
//         }}
//       >
//         {loading ? "Processing..." : "Pay Now"}
//       </button>

//       <div style={{ marginTop: "20px" }}>
//         <Link to="/my-orders">My Orders</Link>
//       </div>
//     </div>
//   );
// }