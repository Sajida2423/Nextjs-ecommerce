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