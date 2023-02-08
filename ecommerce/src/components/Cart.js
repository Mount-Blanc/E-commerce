import { useContext,useState } from "react";
import CartContext from './context/cartcontext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



function Cart() {
  const {cart, removeFromCart} = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}> Cart <ShoppingCartIcon/>
</button>
      {isOpen && (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <h2>Your Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item}>
                {item.title}{" "}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    </>
  );
}

export default Cart;
