// // "use client";
// // import { useCart } from "../context/CartContext";
// // import {Product} from '@/app/Service/product-service'
// // export default function AddToCartButton({ product }: { product: Product }) {
// //   const { cart, addToCart } = useCart();
// //   const isAdded = cart.some(p => p.id === product.id);

// //   return (
// //     <button className={`btn ${isAdded ? "btn-success" : "btn-primary"}`} onClick={() => !isAdded && addToCart(product)}>
// //       {isAdded ? "Added" : "Add to Cart"}
// //     </button>
// //   );
// // }


// "use client";

// import { useCart, CartItem } from "../context/CartContext";
// import { Product } from "@/app/Service/product-service";

// type Props = {
//   product: Product;
// };

// export default function AddToCartButton({ product }: Props) {
//   const { cart, addToCart } = useCart();

//   // Check if product is already in cart
//   const isAdded = cart.some((p) => p.id === product.id);

//   const handleAdd = () => {
//     if (!isAdded) {
//       const item: CartItem = {
//         id: product.id,
//         title: product.title,
//         price: product.price,
//         image: product.image,
//         quantity: 1, // default quantity
//       };
//       addToCart(item);
//     }
//   };

//   return (
//     <button
//       className={`btn ${isAdded ? "btn-success" : "btn-primary"}`}
//       onClick={handleAdd}
//     >
//       {isAdded ? "Added" : "Add to Cart"}
//     </button>
//   );
// }

// 


// "use client";
// import { useCart, CartItem } from "../context/CartContext";
// import { Product } from "@/app/Service/product-service";

// export default function AddToCartButton({ product }: { product: Product }) {
//   const { cart, addToCart } = useCart();
//   const isAdded = cart.some((p) => p.id === product.id);

//   const handleAdd = () => {
//     if (!isAdded) {
//       addToCart({
//         id: product.id,
//         title: product.title,
//         price: product.price,
//         image: product.image,
//         quantity: 1, // default
//       });
//     }
//   };

//   return (
//     <button
//       className={`btn ${isAdded ? "btn-success" : "btn-primary"}`}
//       onClick={handleAdd}
//     >
//       {isAdded ? "Added" : "Add to Cart"}
//     </button>
//   );
// }



// "use client";
// import { useCart, CartItem } from "../context/CartContext";
// import { Product } from "@/app/Service/product-service";
// import { useRouter } from "next/navigation"; // for navigation

// type Props = { product: Product };

// export default function AddToCartButton({ product }: Props) {
//   const { cart, addToCart } = useCart();
//   const router = useRouter();

//   const isAdded = cart.some((p) => p.id === product.id);

//   const handleAdd = () => {
//     if (!isAdded) {
//       const item: CartItem = {
//         id: product.id,
//         title: product.title,
//         price: product.price,
//         image: product.image,
//         quantity: 1,
//       };
//       addToCart(item);

//       // Navigate to cart page after adding
//       router.push("/cart");
//     }
//   };

//   return (
//     <button
//       className={`btn ${isAdded ? "btn-success" : "btn-primary"}`}
//       onClick={handleAdd}
//     >
//       {isAdded ? "Added" : "Add to Cart"}
//     </button>
//   );
// }




"use client";

import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
export default function AddToCartButton({ product }: any) {
  const { addToCart } = useCart();
const router = useRouter();
  const handleAdd = () => {
    addToCart({
      id: Number(product.id),
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  router.push("/cart");
    //  alert("Product added to cart!");
  };

  return (
    <button className="btn btn-primary mt-2" onClick={handleAdd}>
      Add To Cart
    </button>
  );
}