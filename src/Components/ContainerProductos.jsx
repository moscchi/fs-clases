import React, { useContext } from "react";
import { products } from "../data/products";
import { ThemeContext } from "../Context/ThemeContext";
import { UserContext } from "../Context/UserContext";

const ContainerProductos = () => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  return (
    <div className={`${theme} container-products`}>
      {products.map((product) => (
        <p key={product.id}>{`Producto ${product.name} $${
          user.username ? `${Math.floor(product.price / 0.9)}` : product.price
        }`}</p>
      ))}
    </div>
  );
};

export default ContainerProductos;
