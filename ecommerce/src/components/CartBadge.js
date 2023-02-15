import React, { useContext } from "react";
import CartContext from "./context/cartcontext";

const CartBadge = () => {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return;
  }
  return <div>{cart.length}</div>;
};

export default CartBadge;
