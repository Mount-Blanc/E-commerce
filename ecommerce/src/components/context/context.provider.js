
import React, { useReducer } from "react";
import CartContext from "./cartcontext";

const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state,{
        title:action.item.title,
        id:action.item.id,
      image:action.item.image,
    description:action.item.description,
  price:action.item.price}]
      case "REMOVE":
        return state.filter(item => item.id !== action.item.id)
      default:
        return state;
    }
  };
  
  function CartProvider(props) {
    const [cart, dispatch] = useReducer(cartReducer, [{id:0,title:"",image:"",description:""}]);
  
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