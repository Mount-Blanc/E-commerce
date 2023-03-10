import { useContext, useState } from "react";
import CartContext from "./context/cartcontext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Cart.css";
import CartBadge from "./CartBadge";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  console.log(cart.id);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        {" "}
        Cart <ShoppingCartIcon /> <CartBadge />
      </button>
      {isOpen && (
        <div className="cart">
          <h2 className="your-cart">Your Cart</h2>
          <ul>
            {cart.length === 0 && <p>Cart is empty</p>}
            {cart.id !== null &&
              cart.map((item) => (
                <li key={item.id}>
                  <div className="cart-item">
                    <img src={item.image} />
                    {item.title}
                    <div className="price-button">
                      ${item.price}
                      <button
                        className="button"
                        onClick={() => removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            <button className="button" onClick={() => setIsOpen(false)}>
              Close
            </button>
          </ul>
        </div>
      )}
    </>
  );
}

export default Cart;
