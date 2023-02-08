import { useContext,useState } from "react";
import CartContext from './context/cartcontext'

function Cart() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Show Cart</button>
      {isOpen && (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <h2>Your Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item}>
                {item}{" "}
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={() => addToCart("item")}>Add Item</button>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    </>
  );
}

export default Cart;
