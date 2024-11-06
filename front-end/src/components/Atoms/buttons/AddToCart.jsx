import { useState } from "react";

export default function AddToCart() {
  const [inCart, setInCart] = useState(false);

  const toggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <button
      onClick={toggleCart}
      className="absolute left-0 right-0 bottom-0 h-[41px] bg-black text-white rounded-b-md w-full"
    >
      {inCart ? "Remove from Cart" : "Add to Cart"}
    </button>
  );
}
