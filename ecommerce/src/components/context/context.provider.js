
import React, { useReducer } from "react";
import CartContext from "./cartcontext";

const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.item];
      case "REMOVE":
        return state.filter((i) => i !== action.item);
      default:
        return state;
    }
  };
  
  function CartProvider(props) {
    const [cart, dispatch] = useReducer(cartReducer, []);
  
    const addToCart = (item) => {
      dispatch({ type: "ADD", item });
    };
  
    const removeFromCart = (item) => {
      dispatch({ type: "REMOVE", item });
    };
  
    return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        {props.children}
      </CartContext.Provider>
    );
  }
  export default CartProvider