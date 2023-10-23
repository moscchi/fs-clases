import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartStorage = localStorage.getItem("cart");
    cartStorage !== null && setCart(JSON.parse(cartStorage));
  }, []);

  useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  const addToCart = (product) => {
    //Solo puedo agregar ese producto una vez.
    const cartUniqueIds = new Set();
    cart.forEach((cartProduct) => cartUniqueIds.add(cartProduct.id));
    if (!cartUniqueIds.has(product.id)) {
      setCart((prevState) => [...prevState, product]);
      toast.success("Producto agregado al carrito.");
    } else {
      toast.warning("El producto que quieres agregar ya existe en el carrito.");
    }
  };
  const removeFromCart = (productId) => {
    const newCart = cart.filter((productCart) => productCart.id !== productId);
    setCart(newCart);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
