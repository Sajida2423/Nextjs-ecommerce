

// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/app/context/AuthContext";
// import { useCart } from "@/app/context/CartContext";

// export default function CartPage() {
//   const { token } = useAuth();
//   const { cart, removeFromCart } = useCart();
//   const router = useRouter();


//   useEffect(() => {
//     if (!token) {
//       router.push("/login?redirect=/cart");
//     }
//   }, [token, router]);

//   if (!token) return <p>Redirecting to login...</p>;


//     // Calculate total price
//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//         <div className="container mt-4 d-flex flex-column min-vh-100">
//       <h3 className="mb-4">Your Cart ({cart.length} items)</h3>

//       {cart.length === 0 && (
//         <div className="text-center mt-5">
//           <h5>Your cart is empty</h5>
//           <p>Start adding some products!</p>
//         </div>
//       )}

//       {cart.map((item) => (
//         <div
//           key={item.id}
//           className="d-flex align-items-center justify-content-between mb-3 border rounded p-3 shadow-sm"
//           style={{ backgroundColor: "#f8e6f0" }}
//         >
//           <img
//             src={item.image}
//             alt={item.title}
//             width={80}
//             height={80}
//             style={{ objectFit: "contain" }}
//           />

//           <div className="flex-grow-1 ms-3">
//             <h6>{item.title}</h6>
//             <p>
//               ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
//             </p>
//           </div>

//           <button
//             className="btn btn-danger btn-sm"
//             onClick={() => removeFromCart(item.id)}
//           >
//             Remove
//           </button>
//         </div>
//       ))}

//       {cart.length > 0 && (
//         <div className="text-end mt-4">
//           <h4>Total: ₹{totalPrice.toFixed(2)}</h4>
      
//         </div>
//       )}
//     </div>
  
//   );
// }

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import { useAuth } from "@/app/context/AuthContext";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  // const { token } = useAuth();
  const { cart, removeFromCart, totalPrice } = useCart();
  const router = useRouter();

  // useEffect(() => {
  //   if (!token) router.push("/login?redirect=/cart");
  // }, [token, router]);

  // if (!token) return <p>Redirecting to Login...</p>;

  return (
    <div className="container mt-4 d-flex flex-column min-vh-100">
      <h3>Your Cart ({cart.length} items)</h3>

      {!cart.length && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} className="d-flex justify-content-between mb-3">
          <img src={item.image} alt={item.title} width={80} height={80} />
          <div>
            <p>{item.title}</p>
            <p>₹{item.price} × {item.quantity}</p>
      
          </div>
          <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
             
      ))}

      {cart.length > 0 && <h4>Total: ₹{totalPrice.toFixed(2)}</h4>}
    </div>
  );
}

















