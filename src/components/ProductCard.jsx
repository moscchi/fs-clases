/* eslint-disable react/prop-types */

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product }) => {
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const handleDelete = async (id) => {
    try {
      setIsDeleteLoading(true);
      const response = await fetch(
        `https://6532fc12d80bd20280f632e8.mockapi.io/api/products/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw new Error("El producto no se pudo eliminar.");
      toast.success("Producto eliminado con éxito.");
      setIsDeleteLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("El producto no se pudo eliminar.");
      setIsDeleteLoading(false);
    }
  };
  return (
    <div className="product-card">
      {isDeleteLoading ? (
        <p>Eliminando producto...</p>
      ) : (
        <>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          <button onClick={() => handleDelete(product.id)}>Eliminar</button>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default ProductCard;
