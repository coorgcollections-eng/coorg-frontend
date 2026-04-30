// // // import React, { useState } from 'react';
// // // import axios from 'axios';

// // // export default function OrderForm() {
// // //   const [orderData, setOrderData] = useState({
// // //     user_id: '',
// // //     customer_name: '',
// // //     email: '',
// // //     phone: '',
// // //     other_charges: 0,
// // //     order: [{
// // //       product_id: '',
// // //       variant_id: '',
// // //       product_size: '',
// // //       quantity: 1,
// // //       payment_method: 'Online'
// // //     }]
// // //   });

// // //   const handleSubmit = async () => {
// // //     try {
// // //       const item = orderData.order[0];

// // //       if (!orderData.user_id || !orderData.customer_name || !orderData.phone || !item.product_id || !item.variant_id) {
// // //         alert('Please fill all required fields.');
// // //         return;
// // //       }

// // //       const transformedOrder = [{
// // //         _id: item.product_id,
// // //         variants: { _id: item.variant_id },
// // //         product_size: item.product_size,
// // //         quantity: item.quantity || 1,
// // //         payment_method: item.payment_method === 'COD' ? 'COD' : 'Online'
// // //       }];

// // //       const finalPayload = {
// // //         user_id: orderData.user_id,
// // //         customer_name: orderData.customer_name,
// // //         email: orderData.email,
// // //         phone: orderData.phone,
// // //         other_charges: Number(orderData.other_charges) || 0,
// // //         order: transformedOrder
// // //       };

// // //       console.log('Sending order payload:', finalPayload);

// // //       const res = await axios.post(
// // //         'https://leenight.ap-1.evennode.com/api/user/addOrderWithCashFree',
// // //         finalPayload
// // //       );

// // //       const result = res.data;
// // //       if (result.success && result.data?.payment_link) {
// // //         window.location.href = result.data.payment_link;
// // //       } else if (result.success && item.payment_method === 'COD') {
// // //         alert('COD order placed successfully!');
// // //       } else {
// // //         alert('Something went wrong. Please try again.');
// // //       }
// // //     } catch (err) {
// // //       console.error('❌ Order Error:', err);
// // //       alert('Error: ' + (err.response?.data?.message || err.message));
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-6 max-w-xl mx-auto">
// // //       <h1 className="text-2xl font-bold mb-4">Place Order</h1>

// // //       <input placeholder="User ID" className="border p-2 mb-2 w-full" onChange={e => setOrderData({ ...orderData, user_id: e.target.value })} />
// // //       <input placeholder="Customer Name" className="border p-2 mb-2 w-full" onChange={e => setOrderData({ ...orderData, customer_name: e.target.value })} />
// // //       <input placeholder="Email" className="border p-2 mb-2 w-full" onChange={e => setOrderData({ ...orderData, email: e.target.value })} />
// // //       <input placeholder="Phone" className="border p-2 mb-2 w-full" onChange={e => setOrderData({ ...orderData, phone: e.target.value })} />
// // //       <input placeholder="Other Charges" type="number" className="border p-2 mb-2 w-full" onChange={e => setOrderData({ ...orderData, other_charges: e.target.value })} />
// // //       <input placeholder="Product ID" className="border p-2 mb-2 w-full" onChange={e => {
// // //         const updatedOrder = [...orderData.order];
// // //         updatedOrder[0].product_id = e.target.value;
// // //         setOrderData({ ...orderData, order: updatedOrder });
// // //       }} />
// // //       <input placeholder="Variant ID" className="border p-2 mb-2 w-full" onChange={e => {
// // //         const updatedOrder = [...orderData.order];
// // //         updatedOrder[0].variant_id = e.target.value;
// // //         setOrderData({ ...orderData, order: updatedOrder });
// // //       }} />
// // //       <input placeholder="Product Size" className="border p-2 mb-2 w-full" onChange={e => {
// // //         const updatedOrder = [...orderData.order];
// // //         updatedOrder[0].product_size = e.target.value;
// // //         setOrderData({ ...orderData, order: updatedOrder });
// // //       }} />
// // //       <input type="number" placeholder="Quantity" className="border p-2 mb-2 w-full" value={orderData.order[0].quantity} onChange={e => {
// // //         const updatedOrder = [...orderData.order];
// // //         updatedOrder[0].quantity = parseInt(e.target.value) || 1;
// // //         setOrderData({ ...orderData, order: updatedOrder });
// // //       }} />
// // //       <select className="border p-2 mb-4 w-full" value={orderData.order[0].payment_method} onChange={e => {
// // //         const updatedOrder = [...orderData.order];
// // //         updatedOrder[0].payment_method = e.target.value;
// // //         setOrderData({ ...orderData, order: updatedOrder });
// // //       }}>
// // //         <option value="Online">Online (Cashfree)</option>
// // //         <option value="COD">Cash on Delivery</option>
// // //       </select>

// // //       <button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded w-full">Place Order</button>
// // //     </div>
// // //   );
// // // }


// // import React, { useState } from 'react';
// // import axios from 'axios';

// // export default function OrderForm() {
// //   const [orderData, setOrderData] = useState({
// //     user_id: '',
// //     customer_name: '',
// //     email: '',
// //     phone: '',
// //     other_charges: 0,
// //     payment_method: 'Online', 
// //     delivery_address: {
// //     line1: '',
// //     line2: '',
// //     city: '',
// //     state: '',
// //     pincode: '',
// //     landmark: ''
// //   },
// //     order: [{
// //       product_id: '',
// //       variant_id: '',
// //       product_size: '',
// //       quantity: 1
// //     }]
// //   });

// //   const updateProductField = (index, field, value) => {
// //     const updatedOrder = [...orderData.order];
// //     updatedOrder[index][field] = value;
// //     setOrderData({ ...orderData, order: updatedOrder });
// //   };

// //   const addProduct = () => {
// //     setOrderData({
// //       ...orderData,
// //       order: [
// //         ...orderData.order,
// //         { product_id: '', variant_id: '', product_size: '', quantity: 1 }
// //       ]
// //     });
// //   };

// //   const removeProduct = (index) => {
// //     const updatedOrder = orderData.order.filter((_, i) => i !== index);
// //     setOrderData({ ...orderData, order: updatedOrder });
// //   };

// //   const handleSubmit = async () => {
// //     try {
// //       if (!orderData.user_id || !orderData.customer_name || !orderData.phone) {
// //         alert('Please fill all required fields.');
// //         return;
// //       }

// //       if (orderData.order.some(item => !item.product_id || !item.variant_id)) {
// //         alert('Please fill product and variant for all items.');
// //         return;
// //       }

// //       const transformedOrder = orderData.order.map(item => ({
// //         _id: item.product_id,
// //         variants: { _id: item.variant_id },
// //         product_size: item.product_size,
// //         quantity: item.quantity || 1,
// //         payment_method: orderData.payment_method === 'COD' ? 'COD' : 'Online'
// //       }));

// //       const finalPayload = {
// //         user_id: orderData.user_id,
// //         customer_name: orderData.customer_name,
// //         email: orderData.email,
// //         phone: orderData.phone,
// //         other_charges: Number(orderData.other_charges) || 0,
// //         order: transformedOrder,
// //         delivery_address: orderData.delivery_address,
// //       };

// //       console.log('Sending order payload:', finalPayload);

// //       const res = await axios.post(
// //         'https://leenight.ap-1.evennode.com/api/user/addOrderWithCashFree',
// //         finalPayload
// //       );

// //       const result = res.data;
// //       if (result.success && result.data?.payment_link) {
// //         window.location.href = result.data.payment_link;
// //       } else if (result.success && orderData.payment_method === 'COD') {
// //         alert('COD order placed successfully!');
// //       } else {
// //         alert('Something went wrong. Please try again.');
// //       }
// //     } catch (err) {
// //       console.error('❌ Order Error:', err);
// //       alert('Error: ' + (err.response?.data?.message || err.message));
// //     }
// //   };

// //   return (
// //     <div className="p-6 max-w-2xl mx-auto">
// //       <h1 className="text-2xl font-bold mb-4">Place Order</h1>

// //       <input placeholder="User ID" className="border p-2 mb-2 w-full"
// //         onChange={e => setOrderData({ ...orderData, user_id: e.target.value })} />
// //       <input placeholder="Customer Name" className="border p-2 mb-2 w-full"
// //         onChange={e => setOrderData({ ...orderData, customer_name: e.target.value })} />
// //       <input placeholder="Email" className="border p-2 mb-2 w-full"
// //         onChange={e => setOrderData({ ...orderData, email: e.target.value })} />
// //       <input placeholder="Phone" className="border p-2 mb-2 w-full"
// //         onChange={e => setOrderData({ ...orderData, phone: e.target.value })} />
// //       <input placeholder="Other Charges" type="number" className="border p-2 mb-4 w-full"
// //         onChange={e => setOrderData({ ...orderData, other_charges: e.target.value })} />

// //       {/* ✅ Payment Method (once for whole order) */}
// //       <select className="border p-2 mb-4 w-full" value={orderData.payment_method}
// //         onChange={e => setOrderData({ ...orderData, payment_method: e.target.value })}>
// //         <option value="Online">Online (Cashfree)</option>
// //         <option value="COD">Cash on Delivery</option>
// //       </select>

// //       {orderData.order.map((item, index) => (
// //         <div key={index} className="border p-4 mb-4 rounded bg-gray-50">
// //           <h2 className="font-semibold mb-2">Product #{index + 1}</h2>
// //           <input placeholder="Product ID" className="border p-2 mb-2 w-full"
// //             value={item.product_id}
// //             onChange={e => updateProductField(index, 'product_id', e.target.value)} />
// //           <input placeholder="Variant ID" className="border p-2 mb-2 w-full"
// //             value={item.variant_id}
// //             onChange={e => updateProductField(index, 'variant_id', e.target.value)} />
// //           <input placeholder="Product Size" className="border p-2 mb-2 w-full"
// //             value={item.product_size}
// //             onChange={e => updateProductField(index, 'product_size', e.target.value)} />
// //           <input type="number" placeholder="Quantity" className="border p-2 mb-2 w-full"
// //             value={item.quantity}
// //             onChange={e => updateProductField(index, 'quantity', parseInt(e.target.value) || 1)} />

// //           {orderData.order.length > 1 && (
// //             <button
// //               type="button"
// //               className="bg-red-500 text-white p-2 rounded"
// //               onClick={() => removeProduct(index)}
// //             >
// //               Remove Product
// //             </button>
// //           )}
// //         </div>
// //       ))}

// //       <button
// //         type="button"
// //         onClick={addProduct}
// //         className="bg-green-500 text-white p-2 rounded w-full mb-4"
// //       >
// //         + Add Another Product
// //       </button>

// //       <button
// //         onClick={handleSubmit}
// //         className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded w-full"
// //       >
// //         Place Order
// //       </button>
// //     </div>
// //   );
// // }


import React, { useState } from 'react';
import axios from 'axios';

export default function OrderForm() {
  const [orderData, setOrderData] = useState({
    user_id: '',
    customer_name: '',
    email: '',
    phone: '',
    other_charges: 0,
    payment_method: 'Online', 
    delivery_address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      pincode: '',
      landmark: ''
    },
    order: [{
      product_id: '',
      variant_id: '',
      product_size: '',
      quantity: 1
    }]
  });

  const updateProductField = (index, field, value) => {
    const updatedOrder = [...orderData.order];
    updatedOrder[index][field] = value;
    setOrderData({ ...orderData, order: updatedOrder });
  };

  const addProduct = () => {
    setOrderData({
      ...orderData,
      order: [
        ...orderData.order,
        { product_id: '', variant_id: '', product_size: '', quantity: 1 }
      ]
    });
  };

  const removeProduct = (index) => {
    const updatedOrder = orderData.order.filter((_, i) => i !== index);
    setOrderData({ ...orderData, order: updatedOrder });
  };

  const handleSubmit = async () => {
    try {
      if (!orderData.user_id || !orderData.customer_name || !orderData.phone) {
        alert('Please fill all required fields.');
        return;
      }

      if (orderData.order.some(item => !item.product_id || !item.variant_id)) {
        alert('Please fill product and variant for all items.');
        return;
      }

      const transformedOrder = orderData.order.map(item => ({
        _id: item.product_id,
        variants: { _id: item.variant_id },
        product_size: item.product_size,
        quantity: item.quantity || 1,
        payment_method: orderData.payment_method // ✅ keep old structure
      }));

      const finalPayload = {
        user_id: orderData.user_id,
        customer_name: orderData.customer_name,
        email: orderData.email,
        phone: orderData.phone,
        other_charges: Number(orderData.other_charges) || 0,
        order: transformedOrder,
        delivery_address: orderData.delivery_address, // ✅ added
      };

      console.log('Sending order payload:', finalPayload);

      const res = await axios.post(
        'https://leenight.ap-1.evennode.com/api/user/addOrderWithCashFree',
        finalPayload
      );

      const result = res.data;
      if (result.success && result.data?.payment_link) {
        window.location.href = result.data.payment_link;
      } else if (result.success && orderData.payment_method === 'COD') {
        alert('COD order placed successfully!');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('❌ Order Error:', err);
      alert('Error: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Place Order</h1>

      <input placeholder="User ID" className="border p-2 mb-2 w-full"
        onChange={e => setOrderData({ ...orderData, user_id: e.target.value })} />
      <input placeholder="Customer Name" className="border p-2 mb-2 w-full"
        onChange={e => setOrderData({ ...orderData, customer_name: e.target.value })} />
      <input placeholder="Email" className="border p-2 mb-2 w-full"
        onChange={e => setOrderData({ ...orderData, email: e.target.value })} />
      <input placeholder="Phone" className="border p-2 mb-2 w-full"
        onChange={e => setOrderData({ ...orderData, phone: e.target.value })} />
      <input placeholder="Other Charges" type="number" className="border p-2 mb-4 w-full"
        onChange={e => setOrderData({ ...orderData, other_charges: e.target.value })} />

      {/* ✅ Payment Method */}
      <select className="border p-2 mb-4 w-full" value={orderData.payment_method}
        onChange={e => setOrderData({ ...orderData, payment_method: e.target.value })}>
        <option value="Online">Online (Cashfree)</option>
        <option value="COD">Cash on Delivery</option>
      </select>

      {/* ✅ Delivery Address */}
      <h2 className="font-semibold mt-4 mb-2">Delivery Address</h2>
      <input placeholder="Line 1" className="border p-2 mb-2 w-full"
        onChange={e => setOrderData({ ...orderData, delivery_address: { ...orderData.delivery_address, line1: e.target.value } })} />
      <input placeholder="Line 2" className="border p-2 mb-2 w-full"
        onChange={e => setOrderData({ ...orderData, delivery_address: { ...orderData.delivery_address, line2: e.target.value } })} />
      <input placeholder="City" className="border p-2 mb-2 w-full"
        onChange={e => setOrderData({ ...orderData, delivery_address: { ...orderData.delivery_address, city: e.target.value } })} />
      <input placeholder="State" className="border p-2 mb-2 w-full"
        onChange={e => setOrderData({ ...orderData, delivery_address: { ...orderData.delivery_address, state: e.target.value } })} />
      <input placeholder="Pincode" className="border p-2 mb-2 w-full"
        onChange={e => setOrderData({ ...orderData, delivery_address: { ...orderData.delivery_address, pincode: e.target.value } })} />
      <input placeholder="Landmark" className="border p-2 mb-4 w-full"
        onChange={e => setOrderData({ ...orderData, delivery_address: { ...orderData.delivery_address, landmark: e.target.value } })} />

      {/* ✅ Products Section */}
      {orderData.order.map((item, index) => (
        <div key={index} className="border p-4 mb-4 rounded bg-gray-50">
          <h2 className="font-semibold mb-2">Product #{index + 1}</h2>
          <input placeholder="Product ID" className="border p-2 mb-2 w-full"
            value={item.product_id}
            onChange={e => updateProductField(index, 'product_id', e.target.value)} />
          <input placeholder="Variant ID" className="border p-2 mb-2 w-full"
            value={item.variant_id}
            onChange={e => updateProductField(index, 'variant_id', e.target.value)} />
          <input placeholder="Product Size" className="border p-2 mb-2 w-full"
            value={item.product_size}
            onChange={e => updateProductField(index, 'product_size', e.target.value)} />
          <input type="number" placeholder="Quantity" className="border p-2 mb-2 w-full"
            value={item.quantity}
            onChange={e => updateProductField(index, 'quantity', parseInt(e.target.value) || 1)} />

          {orderData.order.length > 1 && (
            <button
              type="button"
              className="bg-red-500 text-white p-2 rounded"
              onClick={() => removeProduct(index)}
            >
              Remove Product
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addProduct}
        className="bg-green-500 text-white p-2 rounded w-full mb-4"
      >
        + Add Another Product
      </button>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded w-full"
      >
        Place Order
      </button>
    </div>
  );
}

// import React, { useState } from 'react';
// import axios from 'axios';

// export default function OrderForm() {
//   const [orderData, setOrderData] = useState({
//     user_id: '',
//     customer_name: '',
//     email: '',
//     phone: '',
//     other_charges: 0,
//     payment_method: 'Online',
//     delivery_address: {
//       line1: '',
//       line2: '',
//       city: '',
//       state: '',
//       pincode: '',
//       landmark: ''
//     },
//     order: [{
//       product_id: '',
//       variant_id: '',
//       product_size: '',
//       quantity: 1
//     }]
//   });

//   const updateProductField = (index, field, value) => {
//     const updatedOrder = [...orderData.order];
//     updatedOrder[index][field] = value;
//     setOrderData({ ...orderData, order: updatedOrder });
//   };

//   const addProduct = () => {
//     setOrderData({
//       ...orderData,
//       order: [
//         ...orderData.order,
//         { product_id: '', variant_id: '', product_size: '', quantity: 1 }
//       ]
//     });
//   };

//   const removeProduct = (index) => {
//     const updatedOrder = orderData.order.filter((_, i) => i !== index);
//     setOrderData({ ...orderData, order: updatedOrder });
//   };

//   const handleSubmit = async () => {
//     try {
//       if (!orderData.user_id || !orderData.customer_name || !orderData.phone) {
//         alert('Please fill all required fields.');
//         return;
//       }

//       if (orderData.order.some(item => !item.product_id || !item.variant_id)) {
//         alert('Please fill product and variant for all items.');
//         return;
//       }

//      const transformedOrder = orderData.order.map(item => ({
//   user_id: orderData.user_id,   // add user_id here
//   product_id: item.product_id,  // ✅ backend expects this
//   variant_id: item.variant_id,  // ✅ backend expects this
//   product_size: item.product_size,
//   quantity: item.quantity || 1,
//   payment_method: orderData.payment_method
// }));


//       const finalPayload = {
//         user_id: orderData.user_id,
//         customer_name: orderData.customer_name,
//         email: orderData.email,
//         phone: orderData.phone,
//         other_charges: Number(orderData.other_charges) || 0,
//         order: transformedOrder,
//         delivery_address: orderData.delivery_address,
//         payment_method: orderData.payment_method
//       };

//       console.log('Sending order payload:', finalPayload);

//       const res = await axios.post(
//         'https://leenight.ap-1.evennode.com/api/user/addOrderWithCashFreeOrder',
//         finalPayload
//       );

//       const result = res.data;
//       if (result.success && result.data?.payment_link) {
//         // redirect to Cashfree hosted page
//         window.location.href = result.data.payment_link;
//       } else if (result.success && orderData.payment_method === 'COD') {
//         alert('COD order placed successfully!');
//       } else {
//         alert('Something went wrong. Please try again.');
//       }
//     } catch (err) {
//       console.error('❌ Order Error:', err);
//       alert('Error: ' + (err.response?.data?.message || err.message));
//     }
//   };

//   return (
//     <div className="p-6 max-w-2xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Place Order</h1>

//       <input placeholder="User ID" className="border p-2 mb-2 w-full"
//         onChange={e => setOrderData({ ...orderData, user_id: e.target.value })} />
//       <input placeholder="Customer Name" className="border p-2 mb-2 w-full"
//         onChange={e => setOrderData({ ...orderData, customer_name: e.target.value })} />
//       <input placeholder="Email" className="border p-2 mb-2 w-full"
//         onChange={e => setOrderData({ ...orderData, email: e.target.value })} />
//       <input placeholder="Phone" className="border p-2 mb-2 w-full"
//         onChange={e => setOrderData({ ...orderData, phone: e.target.value })} />
//       <input placeholder="Other Charges" type="number" className="border p-2 mb-4 w-full"
//         onChange={e => setOrderData({ ...orderData, other_charges: e.target.value })} />

//       <select className="border p-2 mb-4 w-full" value={orderData.payment_method}
//         onChange={e => setOrderData({ ...orderData, payment_method: e.target.value })}>
//         <option value="Online">Online (Cashfree)</option>
//         <option value="COD">Cash on Delivery</option>
//       </select>

//       <h2 className="font-semibold mt-4 mb-2">Delivery Address</h2>
//       {["line1", "line2", "city", "state", "pincode", "landmark"].map((field) => (
//         <input key={field} placeholder={field} className="border p-2 mb-2 w-full"
//           onChange={e => setOrderData({
//             ...orderData,
//             delivery_address: { ...orderData.delivery_address, [field]: e.target.value }
//           })} />
//       ))}

//       {orderData.order.map((item, index) => (
//         <div key={index} className="border p-4 mb-4 rounded bg-gray-50">
//           <h2 className="font-semibold mb-2">Product #{index + 1}</h2>
//           <input placeholder="Product ID" className="border p-2 mb-2 w-full"
//             value={item.product_id}
//             onChange={e => updateProductField(index, 'product_id', e.target.value)} />
//           <input placeholder="Variant ID" className="border p-2 mb-2 w-full"
//             value={item.variant_id}
//             onChange={e => updateProductField(index, 'variant_id', e.target.value)} />
//           <input placeholder="Product Size" className="border p-2 mb-2 w-full"
//             value={item.product_size}
//             onChange={e => updateProductField(index, 'product_size', e.target.value)} />
//           <input type="number" placeholder="Quantity" className="border p-2 mb-2 w-full"
//             value={item.quantity}
//             onChange={e => updateProductField(index, 'quantity', parseInt(e.target.value) || 1)} />

//           {orderData.order.length > 1 && (
//             <button type="button"
//               className="bg-red-500 text-white p-2 rounded"
//               onClick={() => removeProduct(index)}>
//               Remove Product
//             </button>
//           )}
//         </div>
//       ))}

//       <button type="button" onClick={addProduct}
//         className="bg-green-500 text-white p-2 rounded w-full mb-4">
//         + Add Another Product
//       </button>

//       <button onClick={handleSubmit}
//         className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded w-full">
//         Place Order
//       </button>
//     </div>
//   );
// }
