import { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";

const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProductsData();
  }, []);

  const fetchProductsData = async () => {
    const url = "https://6532fc12d80bd20280f632e8.mockapi.io/api/products";

    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      setError(true);
    }
  };
  if (error) return <p>Hubo un error al cargar los productos.</p>;

  if (isLoading) return <p>Cargando...</p>;

  return (
    <>
      <ProductForm fetchData={fetchProductsData}/>
      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <p>No hay productos para mostrar</p>
      )}
    </>
  );
};

export default App;
