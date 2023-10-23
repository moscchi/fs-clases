import { useContext, useState } from "react";
import { FaCartShopping, FaTrashCan, FaXmark } from "react-icons/fa6";
import { CartContext } from "../context/CartContext";

const CartButton = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="cart-button-container">
      <button className="cart-button" onClick={toggleCart}>
        <FaCartShopping color="white" />
      </button>
      {isOpen && (
        <div className="cart-overlay">
          <div className="cart">
            <button className="close-button" onClick={toggleCart}>
              <FaXmark />
            </button>
            <h2>Carrito de compras</h2>
            {cart.length > 0 ? (
              <ul>
                {cart.map((productCard) => (
                  <li key={productCard.id}>
                    {productCard.name} - ${productCard.price} -{" "}
                    <FaTrashCan
                      style={{ cursor: "pointer" }}
                      onClick={() => removeFromCart(productCard.id)}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p>El carrito está vacío.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartButton;
